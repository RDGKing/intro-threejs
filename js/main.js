import * as THREE from './three.js';

// Crea una escena
const scene = new THREE.Scene();

// Crea una cámara
// Primer parámetro: ángulo de visión en grados
// Segundo parámetro: relación de aspecto de la cámara (ancho de la ventana dividido por la altura)
// Tercer parámetro: distancia cercana del plano de recorte 
// Cuarto parámetro: distancia lejana del plano de recorte
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Crea un renderizador WebGL
const renderer = new THREE.WebGLRenderer();
// Establece el tamaño del renderizador igual al tamaño de la ventana del navegador
renderer.setSize(window.innerWidth, window.innerHeight);
// Configura el renderizador para que use la función de animación `animate`
renderer.setAnimationLoop(animate);

// Añade el canvas del renderizador al documento HTML, para visualizar la escena 3D
document.body.appendChild(renderer.domElement);

// Crea la geometría de un cuboide
const geometry = new THREE.BoxGeometry(2, 3, 4);
// Crea el material &una textura básico() para el cuboide
const material = new THREE.MeshBasicMaterial({ color: 0xd1154a });
// Crea una malla (mesh) que combina la geometría del cubo y el material
const cube = new THREE.Mesh(geometry, material);
// Añade el cubo a la escena
scene.add(cube);

// Las figuras se crean en el centro de la pantalla y la camara en el centro de la figura
// Posiciona la cámara a 5 unidades en el eje Z, alejándola del centro de la figura
camera.position.z = 5;

// Función de animación, que será llamada en cada frame
function animate() {
	// Rota el cubo un poco en el eje X
	cube.rotation.x += 0.01;
	// Rota el cubo un poco en el eje Y
	cube.rotation.y += 0.01;
	// Rota el cubo un poco en el eje z
	//cube.rotation.z += 0.01;
	// Renderiza la escena desde la perspectiva de la cámara
	renderer.render(scene, camera);
}
