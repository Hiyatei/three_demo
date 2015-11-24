'use strict';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry1 = new THREE.BoxGeometry( 1, 1, 1 );
var material1 = new THREE.MeshBasicMaterial( { color: 0x68228B} );
var cube = new THREE.Mesh( geometry1, material1 );
scene.add( cube );

cube.position.x = -5;

var geometry2 = new THREE.IcosahedronGeometry(1, 0);
var material2 = new THREE.MeshBasicMaterial( { color: 0xCCAC00, wireframe: true} );
var ico = new THREE.Mesh( geometry2, material2 );
scene.add( ico );
			
var geometry3 = new THREE.SphereGeometry( 1, 8, 8 );
var material3 = new THREE.MeshBasicMaterial( { color: 0x68228B, wireframe: true} );
var sphere = new THREE.Mesh( geometry3, material3 );
scene.add( sphere );

sphere.position.x = 5;

camera.position.z = 10;

var render = function () {
	requestAnimationFrame( render );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	ico.rotation.x += 0.02;
	ico.rotation.y += 0.02;

	sphere.rotation.x += 0.03;

	renderer.render(scene, camera);
};

render();