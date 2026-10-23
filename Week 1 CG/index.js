import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);

camera.position.z = 3;

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({color: 0xFFFDD0});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);


const coneGeometry = new THREE.ConeGeometry(0.7, 0.7, 4);
const coneMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.y = 0.8;
cone.rotation.y = 0.785;
scene.add(cone);


const cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 8);
const cylinderMaterial = new THREE.MeshBasicMaterial({color: 0x808080});
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(0.4, 1, 0);
scene.add(cylinder);

const light = new THREE.AmbientLight(0xffffff, 0.6); 
scene.add(light);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('scene').appendChild(renderer.domElement);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();