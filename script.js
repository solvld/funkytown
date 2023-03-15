var $7DpOm$three = require("three");
var $7DpOm$threeexamplesjsmcontrolsOrbitControlsjs = require("three/examples/jsm/controls/OrbitControls.js");
var $7DpOm$threeexamplesjsmloadersGLTFLoaderjs = require("three/examples/jsm/loaders/GLTFLoader.js");




const $74b8d6f89f81d89e$var$maketUrl = new URL("shiba.3dd04339.gltf", "file:" + __filename);
const $74b8d6f89f81d89e$var$renderer = new $7DpOm$three.WebGL1Renderer();
$74b8d6f89f81d89e$var$renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild($74b8d6f89f81d89e$var$renderer.domElement);
const $74b8d6f89f81d89e$var$scene = new $7DpOm$three.Scene();
const $74b8d6f89f81d89e$var$camera = new $7DpOm$three.PerspectiveCamera(75, window.innerHeight / window.innerHeight, 0.1, 1000);
const $74b8d6f89f81d89e$var$orbit = new (0, $7DpOm$threeexamplesjsmcontrolsOrbitControlsjs.OrbitControls)($74b8d6f89f81d89e$var$camera, $74b8d6f89f81d89e$var$renderer.domElement);
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);
$74b8d6f89f81d89e$var$camera.position.set(5, 5, 5);
$74b8d6f89f81d89e$var$orbit.update();
const $74b8d6f89f81d89e$var$boxGeometry = new $7DpOm$three.BoxGeometry();
const $74b8d6f89f81d89e$var$boxMaterial = new $7DpOm$three.MeshStandardMaterial({
    color: 0x90D3F4
});
const $74b8d6f89f81d89e$var$box = new $7DpOm$three.Mesh($74b8d6f89f81d89e$var$boxGeometry, $74b8d6f89f81d89e$var$boxMaterial);
$74b8d6f89f81d89e$var$box.position.y = 3;
// scene.add(box);
const $74b8d6f89f81d89e$var$ambLight = new $7DpOm$three.AmbientLight(0x888888);
$74b8d6f89f81d89e$var$scene.add($74b8d6f89f81d89e$var$ambLight);
const $74b8d6f89f81d89e$var$directioanalLight = new $7DpOm$three.DirectionalLight(0xFFFFFF, 0.7);
$74b8d6f89f81d89e$var$scene.add($74b8d6f89f81d89e$var$directioanalLight);
$74b8d6f89f81d89e$var$directioanalLight.position.set(-10, 7, 5);
// const dLightHelper = new THREE.DirectionalLightHelper(directioanalLight)
// scene.add(dLightHelper)
const $74b8d6f89f81d89e$var$assetLoader = new (0, $7DpOm$threeexamplesjsmloadersGLTFLoaderjs.GLTFLoader)();
$74b8d6f89f81d89e$var$assetLoader.load($74b8d6f89f81d89e$var$maketUrl.href, function(gltf) {
    const model = gltf.scene;
    $74b8d6f89f81d89e$var$scene.add(model);
    model.position.y = 1;
    model.scale.set(1.5, 0.3, 0.9);
    function animateModel() {
        model.rotation.y -= 0.045;
        model.rotation.z += 0.001;
        $74b8d6f89f81d89e$var$renderer.render($74b8d6f89f81d89e$var$scene, $74b8d6f89f81d89e$var$camera);
    }
    $74b8d6f89f81d89e$var$renderer.setAnimationLoop(animateModel);
}, undefined, function(err) {
    console.log(err);
});
function $74b8d6f89f81d89e$var$animate() {
    $74b8d6f89f81d89e$var$box.rotation.y += 0.003;
    $74b8d6f89f81d89e$var$renderer.render($74b8d6f89f81d89e$var$scene, $74b8d6f89f81d89e$var$camera);
}
$74b8d6f89f81d89e$var$renderer.setAnimationLoop($74b8d6f89f81d89e$var$animate);


//# sourceMappingURL=script.js.map
