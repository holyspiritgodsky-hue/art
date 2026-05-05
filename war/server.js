"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { WebSocketServer } = require("ws");

const PORT = Number(process.env.PORT || 8080);
const LEGACY_PREFIX = "/main/war";
const PUBLIC_DIR = __dirname;
const OPEN_STATE = 1;
const PLAYER_COUNT = 6;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml"
};

function loadHeroPool() {
  try {
    const heroesScriptPath = path.join(PUBLIC_DIR, "heroes.js");
    const code = fs.readFileSync(heroesScriptPath, "utf8");
    const sandbox = {
      window: {},
      localStorage: { getItem: () => null, setItem: () => {} },
      sessionStorage: { getItem: () => null, setItem: () => {} }
    };
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox, { filename: "heroes.js" });

    const store = sandbox.window && sandbox.window.WarHeroes;
    if (!store || !Array.isArray(store.HERO_IDS) || !store.HERO_IDS.length) {
      return ["zhugeliang", "lancelot", "sanada", "sunshangxiang", "daqiao", "xiaoqiao", "elizabeth"];
    }
    return store.HERO_IDS.slice();
  } catch {
    return ["zhugeliang", "lancelot", "sanada", "sunshangxiang", "daqiao", "xiaoqiao", "elizabeth"];
  }
}

const heroPool = loadHeroPool();
const heroSet = new Set(heroPool);

const rooms = new Map();
const waiting = [];
let roomCounter = 1;
let playerCounter = 1;

function send(ws, payload) {
  if (ws && ws.readyState === OPEN_STATE) {
    ws.send(JSON.stringify(payload));
  }
}

function broadcast(room, payload) {
  send(room.A, payload);
  send(room.B, payload);
}

function removeFromWaiting(ws) {
  const idx = waiting.indexOf(ws);
  if (idx >= 0) waiting.splice(idx, 1);
}

function normalizeLineup(input) {
  if (!Array.isArray(input)) return null;
  const out = [];
  const seen = new Set();
  for (let i = 0; i < input.length; i += 1) {
    const id = String(input[i] || "").trim();
    if (!heroSet.has(id) || seen.has(id)) continue;
    seen.add(id);
    out.push(id);
    if (out.length >= PLAYER_COUNT) break;
  }
  if (out.length !== PLAYER_COUNT) return null;
  return out;
}

function createRoom(a, b) {
  const roomId = `R${roomCounter++}`;
  const room = {
    id: roomId,
    A: a,
    B: b,
    lineupA: null,
    lineupB: null,
    readyA: false,
    readyB: false,
    started: false
  };

  a.roomId = roomId;
  a.side = "A";
  b.roomId = roomId;
  b.side = "B";
  rooms.set(roomId, room);

  send(a, { type: "matched", side: "A" });
  send(b, { type: "matched", side: "B" });
  broadcast(room, { type: "draftStart", heroPool });
}

function tryMatch() {
  while (waiting.length >= 2) {
    const a = waiting.shift();
    const b = waiting.shift();
    if (!a || !b) return;
    if (a.readyState !== OPEN_STATE || b.readyState !== OPEN_STATE) {
      if (a.readyState === OPEN_STATE) waiting.unshift(a);
      if (b.readyState === OPEN_STATE) waiting.unshift(b);
      return;
    }
    createRoom(a, b);
  }
}

function leaveRoom(ws) {
  removeFromWaiting(ws);

  if (!ws.roomId) return;
  const room = rooms.get(ws.roomId);
  if (!room) {
    ws.roomId = null;
    ws.side = null;
    return;
  }

  const peer = ws.side === "A" ? room.B : room.A;
  rooms.delete(room.id);

  ws.roomId = null;
  ws.side = null;

  if (peer && peer.readyState === OPEN_STATE) {
    peer.roomId = null;
    peer.side = null;
    send(peer, { type: "opponentLeft", message: "Opponent disconnected." });
    waiting.push(peer);
    send(peer, { type: "waiting", message: "Opponent left, waiting for next player..." });
    tryMatch();
  }
}

function handleMessage(ws, msg) {
  if (msg.type === "findMatch") {
    if (ws.roomId) return;
    removeFromWaiting(ws);
    waiting.push(ws);
    send(ws, { type: "waiting", message: "Waiting for another player..." });
    tryMatch();
    return;
  }

  if (!ws.roomId || !ws.side) return;
  const room = rooms.get(ws.roomId);
  if (!room) return;

  if (msg.type === "setLineup") {
    const lineup = normalizeLineup(msg.lineup);
    if (!lineup) {
      send(ws, { type: "error", message: "Lineup must contain 6 unique heroes." });
      return;
    }

    if (ws.side === "A") {
      room.lineupA = lineup;
      room.readyA = false;
    } else {
      room.lineupB = lineup;
      room.readyB = false;
    }

    broadcast(room, {
      type: "draftUpdate",
      readyA: room.readyA,
      readyB: room.readyB,
      lockA: !!room.lineupA,
      lockB: !!room.lineupB
    });
    return;
  }

  if (msg.type === "ready") {
    if (ws.side === "A") {
      if (!room.lineupA) {
        send(ws, { type: "error", message: "Set lineup before ready." });
        return;
      }
      room.readyA = true;
    } else {
      if (!room.lineupB) {
        send(ws, { type: "error", message: "Set lineup before ready." });
        return;
      }
      room.readyB = true;
    }

    broadcast(room, {
      type: "draftUpdate",
      readyA: room.readyA,
      readyB: room.readyB,
      lockA: !!room.lineupA,
      lockB: !!room.lineupB
    });

    if (room.readyA && room.readyB && !room.started) {
      room.started = true;
      send(room.A, {
        type: "matchStart",
        isHost: true,
        yourSide: "blue",
        blueLineup: room.lineupA,
        redLineup: room.lineupB
      });
      send(room.B, {
        type: "matchStart",
        isHost: false,
        yourSide: "red",
        blueLineup: room.lineupA,
        redLineup: room.lineupB
      });
    }
    return;
  }

  if (!room.started) return;

  if (msg.type === "guestInput" && ws.side === "B") {
    send(room.A, { type: "guestInput", input: msg.input || {} });
    return;
  }

  if (msg.type === "snapshot" && ws.side === "A") {
    send(room.B, { type: "snapshot", snapshot: msg.snapshot || null });
  }
}

function serveStatic(req, res) {
  let reqPath = req.url || "/";
  reqPath = reqPath.split("?")[0];

  if (reqPath === "/") {
    reqPath = "/playfootball.html";
  }

  if (reqPath.startsWith(LEGACY_PREFIX + "/")) {
    reqPath = reqPath.slice(LEGACY_PREFIX.length);
  }

  if (!reqPath.startsWith("/")) {
    reqPath = "/" + reqPath;
  }

  const absPath = path.join(PUBLIC_DIR, reqPath);
  if (!absPath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(absPath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const ext = path.extname(absPath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer(serveStatic);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.id = `P${playerCounter++}`;
  ws.roomId = null;
  ws.side = null;

  send(ws, {
    type: "welcome",
    playerId: ws.id,
    heroPool
  });

  ws.on("message", (raw) => {
    let msg;
    try {
      msg = JSON.parse(String(raw));
    } catch {
      send(ws, { type: "error", message: "Invalid JSON." });
      return;
    }
    handleMessage(ws, msg);
  });

  ws.on("close", () => {
    leaveRoom(ws);
  });

  ws.on("error", () => {
    leaveRoom(ws);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
