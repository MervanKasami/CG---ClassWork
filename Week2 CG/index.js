import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);

camera.position.z = 7;




const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({color: 0xffff00});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 2;
scene.add(sphere);


const marsGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const marsMaterial = new THREE.MeshStandardMaterial({color: 0xff3300});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.x = -2;
scene.add(mars);

const phobosGeometry = new THREE.SphereGeometry(0.15, 16, 16);
const phobosMaterial = new THREE.MeshStandardMaterial({color: 0x888888});
const phobos = new THREE.Mesh(phobosGeometry, phobosMaterial);
phobos.position.x = -1.3;
phobos.position.y = 0.5;
scene.add(phobos);


const light = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 3, 100);
pointLight.position.set(3, 3, 4);
scene.add(pointLight);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('scene').appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);



    
phobos.position.x = mars.position.x + Math.cos(Date.now() * 0.002) * 0.8;
phobos.position.y = mars.position.y + Math.sin(Date.now() * 0.002) * 0.8;

    controls.update();
    renderer.render(scene, camera);
}

animate();