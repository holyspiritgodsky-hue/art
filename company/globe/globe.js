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
	controls.autoRotateSpeed = 0.9;
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

	const holeAxis = { value: new THREE.Vector3(0, 1, 0) };
	const holeRadius = { value: 0 };
	const impacts = [];
	const raycaster = new THREE.Raycaster();
	const pointer = new THREE.Vector2();
	const shakeOffset = new THREE.Vector3();
	let earth;
	let hits = 0;
	let gesture;
	let inView = true;
	let lastFrameTime;
	let shakeStarted;
	function requestRender() {
		if (!frame && !failed && !document.hidden && inView) frame = requestAnimationFrame(render);
	}
	function updateImpacts(time) {
		for (let i = impacts.length - 1; i >= 0; i--) {
			const impact = impacts[i];
			const progress = Math.min((time - impact.started) / 900, 1);
			impact.ring.material.opacity = Math.pow(1 - progress, 0.65) * 0.95;
			impact.flash.material.opacity = Math.pow(1 - progress, 2) * 0.9;
			impact.sparks.material.opacity = (1 - progress) * 0.95;
			impact.group.scale.setScalar(reducedMotion.matches ? 1 : 1 + progress * 1.2);
			if (progress >= 1) {
				world.remove(impact.group);
				impact.group.traverse((object) => {
					if (object.geometry) object.geometry.dispose();
					if (object.material) object.material.dispose();
				});
				impacts.splice(i, 1);
			}
		}
	}
	function render(time) {
		frame = 0;
		if (failed) return;
		try {
			const delta = lastFrameTime === undefined ? 0 : Math.min((time - lastFrameTime) / 1000, 0.1);
			lastFrameTime = time;
			controls.update(delta);
			if (shakeStarted !== undefined) {
				const progress = (time - shakeStarted) / 250;
				if (reducedMotion.matches || progress >= 1) {
					world.position.set(0, 0, 0);
					shakeStarted = undefined;
				} else {
					const distance = Math.sin(progress * Math.PI * 6) * (1 - progress) * 0.075;
					world.position.copy(shakeOffset.set(distance, 0, 0).applyQuaternion(camera.quaternion));
				}
			}
			updateImpacts(time);
			renderer.render(scene, camera);
			if (controls.autoRotate || impacts.length || shakeStarted !== undefined) requestRender();
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
	function showImpact(point) {
		if (!reducedMotion.matches) shakeStarted = performance.now();
		const group = new THREE.Group();
		const ring = new THREE.Mesh(
			new THREE.RingGeometry(0.08, 0.12, 48),
			new THREE.MeshBasicMaterial({ color: 0xffa43b, transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthWrite: false, toneMapped: false })
		);
		const flash = new THREE.Mesh(
			new THREE.CircleGeometry(0.075, 32),
			new THREE.MeshBasicMaterial({ color: 0xffefb5, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, toneMapped: false })
		);
		flash.position.z = 0.003;
		const sparkPoints = [];
		for (let i = 0; i < 8; i++) {
			const angle = i * Math.PI / 4;
			sparkPoints.push(Math.cos(angle) * 0.15, Math.sin(angle) * 0.15, 0.004, Math.cos(angle) * 0.23, Math.sin(angle) * 0.23, 0.004);
		}
		const sparkGeometry = new THREE.BufferGeometry();
		sparkGeometry.setAttribute('position', new THREE.Float32BufferAttribute(sparkPoints, 3));
		const sparks = new THREE.LineSegments(sparkGeometry, new THREE.LineBasicMaterial({ color: 0xffd06a, transparent: true, opacity: 0.95, depthWrite: false, toneMapped: false }));
		group.add(ring, flash, sparks);
		const normal = point.clone().normalize();
		group.position.copy(normal).multiplyScalar(1.005);
		group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
		world.add(group);
		impacts.push({ group, ring, flash, sparks, started: performance.now() });
		requestRender();
	}
	function openHole(point) {
		const radius = 0.27;
		holeAxis.value.copy(point).normalize();
		holeRadius.value = radius;
		const length = 2 * Math.sqrt(1 - radius * radius);
		const tunnel = new THREE.Group();
		const interior = new THREE.Mesh(
			new THREE.CylinderGeometry(radius, radius, length, 48, 1, true),
			new THREE.MeshPhongMaterial({ color: 0x8e2606, emissive: 0xff540b, emissiveIntensity: 0.3, specular: 0xffe6c6, side: THREE.BackSide, shininess: 30 })
		);
		interior.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), holeAxis.value);
		tunnel.add(interior);
		for (const direction of [1, -1]) {
			const normal = holeAxis.value.clone().multiplyScalar(direction);
			const rim = new THREE.Mesh(
				new THREE.RingGeometry(radius, radius + 0.035, 64),
				new THREE.MeshBasicMaterial({ color: 0xff8e43, side: THREE.DoubleSide, depthWrite: false, toneMapped: false })
			);
			rim.position.copy(normal).multiplyScalar(length / 2 + 0.002);
			rim.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
			tunnel.add(rim);
		}
		world.add(tunnel);
		requestRender();
	}
	function hitEarth(event) {
		if (!earth) return;
		const rect = canvas.getBoundingClientRect();
		pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
		camera.updateMatrixWorld();
		earth.updateWorldMatrix(true, false);
		raycaster.setFromCamera(pointer, camera);
		const hit = raycaster.intersectObject(earth)[0];
		if (!hit) return;
		const point = earth.worldToLocal(hit.point.clone());
		showImpact(point);
		if (holeRadius.value > 0) return;
		hits++;
		if (hits === 5) openHole(point);
	}
	canvas.addEventListener('pointerdown', (event) => {
		if (!event.isPrimary || event.button !== 0) {
			gesture = null;
			return;
		}
		gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false };
	});
	canvas.addEventListener('pointermove', (event) => {
		if (gesture && gesture.id === event.pointerId && Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) > 5) gesture.moved = true;
	});
	canvas.addEventListener('pointerup', (event) => {
		if (gesture && gesture.id === event.pointerId && !gesture.moved) hitEarth(event);
		gesture = null;
	});
	canvas.addEventListener('pointercancel', () => { gesture = null; });
	canvas.addEventListener('webglcontextlost', (event) => {
		showFailure('地球图形中断，请刷新页面；地区筛选仍可使用。', event);
	});

	new THREE.TextureLoader().load(earthTexture, (texture) => {
		if (failed) {
			texture.dispose();
			return;
		}
		texture.colorSpace = THREE.SRGBColorSpace;
		const material = new THREE.MeshPhongMaterial({ map: texture, shininess: 12, specular: new THREE.Color('#27384d') });
		material.onBeforeCompile = (shader) => {
			shader.uniforms.holeAxis = holeAxis;
			shader.uniforms.holeRadius = holeRadius;
			// Discard a cylinder in local space so both openings rotate with the globe.
			shader.vertexShader = shader.vertexShader
				.replace('#include <common>', '#include <common>\nvarying vec3 vHolePosition;')
				.replace('#include <begin_vertex>', '#include <begin_vertex>\nvHolePosition = position;');
			shader.fragmentShader = shader.fragmentShader
				.replace('#include <common>', '#include <common>\nvarying vec3 vHolePosition;\nuniform vec3 holeAxis;\nuniform float holeRadius;')
				.replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\nvec3 holeOffset = vHolePosition - holeAxis * dot(vHolePosition, holeAxis);\nif (length(holeOffset) < holeRadius) discard;');
		};
		earth = new THREE.Mesh(new THREE.SphereGeometry(1, 96, 64), material);
		world.add(earth);
		status.textContent = '';

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
