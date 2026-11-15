import * as THREE from 'three';
import { OrbitControls } from './vendor/OrbitControls.js';
import earthTexture from './assets/earth-day.jpg';

const host = document.getElementById('earth');
const status = document.getElementById('earthStatus');
let frame = 0;
let renderer;
let controls;
let observer;
let visibilityObserver;
let failed = false;

function showFailure(message, error) {
	if (failed) return;
	failed = true;
	cancelAnimationFrame(frame);
	console.error(message, error);
	if (observer) observer.disconnect();
	if (visibilityObserver) visibilityObserver.disconnect();
	if (controls) controls.dispose();
	if (renderer) {
		renderer.domElement.remove();
		renderer.dispose();
	}
	host.classList.add('earth-fallback');
	status.textContent = message;
}

try {
	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
	renderer.outputColorSpace = THREE.SRGBColorSpace;
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1.15;
	const canvas = renderer.domElement;
	canvas.tabIndex = 0;
	canvas.setAttribute('role', 'img');
	canvas.setAttribute('aria-label', '三维地球，可拖动或使用方向键旋转');
	host.append(canvas);

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
	camera.position.set(0, 0.2, 3.65);
	controls = new OrbitControls(camera, canvas);
	controls.enablePan = false;
	controls.enableZoom = false;
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	controls.enableDamping = !reducedMotion.matches;
	controls.autoRotate = !reducedMotion.matches;
	controls.autoRotateSpeed = 0.7;
	scene.add(new THREE.AmbientLight(0x9aacc8, 1.7));
	const light = new THREE.DirectionalLight(0xffffff, 3);
	light.position.set(-2.2, 1.1, 2.4);
	scene.add(light);

	const world = new THREE.Group();
	const longitude = THREE.MathUtils.degToRad(103 + 180);
	const latitude = THREE.MathUtils.degToRad(90 - 35);
	const x = -Math.sin(latitude) * Math.cos(longitude);
	const z = Math.sin(latitude) * Math.sin(longitude);
	world.rotation.y = Math.atan2(-x, z);
	world.rotation.z = 0.035;
	scene.add(world);

	let inView = true;
	let lastFrameTime;
	function requestRender() {
		if (!frame && !failed && !document.hidden && inView) frame = requestAnimationFrame(render);
	}
	function render(time) {
		frame = 0;
		if (failed) return;
		try {
			const delta = lastFrameTime === undefined ? 0 : Math.min((time - lastFrameTime) / 1000, 0.1);
			lastFrameTime = time;
			controls.update(delta);
			renderer.render(scene, camera);
			if (controls.autoRotate) requestRender();
		} catch (error) {
			showFailure('地球渲染失败；地区筛选仍可使用。', error);
		}
	}
	controls.addEventListener('change', requestRender);
	document.addEventListener('visibilitychange', () => {
		lastFrameTime = undefined;
		requestRender();
	});
	reducedMotion.addEventListener('change', () => {
		controls.enableDamping = !reducedMotion.matches;
		controls.autoRotate = !reducedMotion.matches;
		lastFrameTime = undefined;
		requestRender();
	});
	canvas.addEventListener('keydown', (event) => {
		const step = 0.12;
		if (event.key === 'ArrowLeft') world.rotation.y -= step;
		else if (event.key === 'ArrowRight') world.rotation.y += step;
		else if (event.key === 'ArrowUp') world.rotation.x -= step;
		else if (event.key === 'ArrowDown') world.rotation.x += step;
		else return;
		event.preventDefault();
		requestRender();
	});
	canvas.addEventListener('webglcontextlost', (event) => {
		showFailure('地球图形中断，请刷新页面；地区筛选仍可使用。', event);
	});

	new THREE.TextureLoader().load(earthTexture, (texture) => {
		if (failed) {
			texture.dispose();
			return;
		}
		texture.colorSpace = THREE.SRGBColorSpace;
		world.add(new THREE.Mesh(
			new THREE.SphereGeometry(1, 96, 64),
			new THREE.MeshPhongMaterial({ map: texture, shininess: 12, specular: new THREE.Color('#27384d') })
		));
		status.textContent = '聚焦地球后也可用方向键旋转。';

		function resize() {
			const size = host.clientWidth;
			if (!size || failed) return;
			renderer.setSize(size, host.clientHeight, false);
			camera.aspect = size / host.clientHeight;
			camera.updateProjectionMatrix();
			requestRender();
		}
		observer = new ResizeObserver(resize);
		observer.observe(host);
		visibilityObserver = new IntersectionObserver(([entry]) => {
			inView = entry.isIntersecting;
			lastFrameTime = undefined;
			requestRender();
		});
		visibilityObserver.observe(host);
		resize();
	}, undefined, (error) => showFailure('地球纹理加载失败；地区筛选仍可使用。', error));
} catch (error) {
	showFailure('地球加载失败，请检查浏览器是否支持 WebGL；地区筛选仍可使用。', error);
}
