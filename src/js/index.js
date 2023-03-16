import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

const maketUrl = new URL('../img/shiba.gltf', import.meta.url)

const renderer = new THREE.WebGL1Renderer();

renderer.setSize(window.innerWidth, window.innerHeight);
 
document.body.appendChild(renderer.domElement);


const scene =  new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerHeight / window.innerHeight,
  0.1,
  1000
);

const orbit = new OrbitControls(camera, renderer.domElement);


// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

camera.position.set(5,5,5);
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial({color: 0x90D3F4});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = 3;
// scene.add(box);

const ambLight = new THREE.AmbientLight(0x888888);
scene.add(ambLight);


const directioanalLight = new THREE.DirectionalLight(0xFFFFFF, 0.7);
scene.add(directioanalLight);
directioanalLight.position.set(-10,7,5);
// const dLightHelper = new THREE.DirectionalLightHelper(directioanalLight)
// scene.add(dLightHelper)


const assetLoader = new GLTFLoader();
assetLoader.load(maketUrl.href, function(gltf){
  const model = gltf.scene;
  scene.add(model);
  model.position.y = 1;
  model.scale.set(1.5,0.3, 0.9)
  function animateModel(){
    model.rotation.y -= 0.045;
    model.rotation.z += 0.001;
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animateModel);
},undefined, function(err){
  console.log(err);
})

function animate() {
  box.rotation.y += 0.003;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);