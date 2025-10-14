import * as THREE from 'three';

const scene = new THREE.Scene();

const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  0.0,  1.0,  0.0,
 -1.0, -1.0,  0.0,
  1.0, -1.0,  0.0
]);

geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide
});

const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

const sizes = {
  width: 800,
  height: 600
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
