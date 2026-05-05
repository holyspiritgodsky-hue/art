# Render 免费部署（给这个项目用）

你已经有后端代码：server.js。
你缺的只是把它放到公网运行。

## 1. 上传代码到 GitHub

把当前项目推送到你的仓库（例如 art）。

## 2. 在 Render 创建 Web Service

1. 打开 https://render.com 并登录
2. 点击 New -> Web Service
3. 选择你的 GitHub 仓库
4. Render 会自动识别 render.yaml
5. 点击 Create Web Service

## 3. 等待部署完成

部署成功后会得到一个地址，例如：

https://war-football-online.onrender.com

它对应的 WebSocket 地址是：

wss://war-football-online.onrender.com

## 4. 填回前端配置

打开 playfootball.html，把常量 DEPLOY_WS_URL 设置为：

wss://你的-render-域名

示例：

const DEPLOY_WS_URL = "wss://war-football-online.onrender.com";

## 5. 前端静态托管

前端可以继续放 GitHub Pages。

用户进入页面后，点“联机”即可自动连接，不需要手填服务器地址。

## 常见问题

1. 首次访问慢：Render 免费实例会休眠，首次唤醒需要几十秒。
2. 必须用 wss：前端是 https 页面时，WebSocket 必须是 wss。
3. 连接失败：确认 DEPLOY_WS_URL 拼写正确，且 Render 服务状态为 Live。
