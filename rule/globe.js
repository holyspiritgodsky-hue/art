import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const host = document.getElementById('globe');
const status = document.getElementById('globe-status');
let latest = null;
let renderer;
let controls;
let observer;
let frame = 0;
let world;
let connectionsLayer;
let camera;

function coordinates(lat, lon, radius = 1.01) {
  const phi = THREE.MathUtils.degToRad(lon + 180);
  const theta = THREE.MathUtils.degToRad(90 - lat);
  return new THREE.Vector3(-radius * Math.sin(theta) * Math.cos(phi), radius * Math.cos(theta), radius * Math.sin(theta) * Math.sin(phi));
}

function setConnections({ places, connections }) {
  latest = { places, connections };
  if (!connectionsLayer) return;
  for (const child of [...connectionsLayer.children]) {
    connectionsLayer.remove(child);
    child.geometry.dispose();
    child.material.dispose();
  }
  const lookup = new Map(places.map((place) => [place.id, place]));
  for (const connection of connections) {
    const from = lookup.get(connection.from), to = lookup.get(connection.to);
    if (!from || !to) continue;
    const start = coordinates(from.lat, from.lon), end = coordinates(to.lat, to.lon);
    const middle = start.clone().add(end).normalize().multiplyScalar(1.25);
    const curve = new THREE.QuadraticBezierCurve3(start, middle, end);
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(64)), new THREE.LineBasicMaterial({ color: 0x7ce4ca, transparent: true, opacity: 0.9 }));
    connectionsLayer.add(line);
    for (const position of [start, end]) {
      const marker = new THREE.Mesh(new THREE.SphereGeometry(0.012, 10, 8), new THREE.MeshBasicMaterial({ color: 0xb5ffeb }));
      marker.position.copy(position); connectionsLayer.add(marker);
    }
  }
}
window.addEventListener('world-connections', (event) => setConnections(event.detail));

try {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.domElement.setAttribute('aria-label', '三维地球；拖动旋转，滚轮缩放');
  renderer.domElement.setAttribute('role', 'img');
  host.prepend(renderer.domElement);
  const scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, 0.2, 3.65);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false; controls.enableDamping = true; controls.minDistance = 2.4; controls.maxDistance = 6;
  const ambient = new THREE.AmbientLight(0x9aacc8, 1.7); scene.add(ambient);
  const light = new THREE.DirectionalLight(0xffffff, 3); light.position.set(-2.2, 1.1, 2.4); scene.add(light);
  world = new THREE.Group();
  const asia = coordinates(35, 103, 1);
  world.rotation.y = Math.atan2(-asia.x, asia.z);
  world.rotation.z = 0.035;
  scene.add(world);
  const texture = await new THREE.TextureLoader().loadAsync('./afterlight/assets/earth-day.jpg');
  texture.colorSpace = THREE.SRGBColorSpace;
  const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 96, 64), new THREE.MeshPhongMaterial({ map: texture, shininess: 12, specular: new THREE.Color('#27384d') }));
  world.add(earth);
  connectionsLayer = new THREE.Group(); world.add(connectionsLayer);
  if (latest) setConnections(latest);
  function resize() {
    if (!host.clientWidth || !host.clientHeight) return;
    renderer.setSize(host.clientWidth, host.clientHeight, false);
    camera.aspect = host.clientWidth / host.clientHeight;
    camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(18)) / Math.min(1, camera.aspect)));
    camera.updateProjectionMatrix();
  }
  observer = new ResizeObserver(resize); observer.observe(host);
  window.addEventListener('resize', resize); resize();
  renderer.domElement.addEventListener('webglcontextlost', (event) => {
    event.preventDefault(); cancelAnimationFrame(frame); frame = 0;
    status.hidden = false; status.textContent = '图形上下文中断，请刷新页面。';
  });
  function render() {
    frame = requestAnimationFrame(render);
    if (document.hidden || document.getElementById('view-world').hidden) return;
    controls.update(); renderer.render(scene, camera);
  }
  status.hidden = true;
  window.dispatchEvent(new Event('globe-ready'));
  render();
  window.addEventListener('pagehide', () => {
    cancelAnimationFrame(frame); observer.disconnect(); controls.dispose();
    scene.traverse((object) => { object.geometry?.dispose(); object.material?.dispose(); });
    texture.dispose(); renderer.dispose();
  }, { once: true });
} catch (error) {
  console.error('Globe initialization failed:', error);
  status.hidden = false;
  status.textContent = '地球加载失败，请检查浏览器是否支持 WebGL，然后刷新。';
}
