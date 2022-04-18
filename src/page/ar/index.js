import './index.css';

import gsap from 'gsap';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import setFavicon from '../../utitly/setFavicon';
import setMetaTag from '../../utitly/setMetaTags';

import ar_code_img1 from '../../assets/ar/cleansingGel-ar.png';
import ar_code_img2 from '../../assets/ar/cornMilk-ar.png';
import ar_code_img3 from '../../assets/ar/kuMilk-ar.png';
import ar_code_img4 from '../../assets/ar/ciderVinegar-ar.png';

import product_img1 from '../../assets/ar/cleansingGel.png';
import product_img2 from '../../assets/ar/cornMilk.png';
import product_img3 from '../../assets/ar/kuMilk.png';
import product_img4 from '../../assets/ar/ciderVinegar.jpg';

import phone_model from '../../assets/model/phone.gltf';

import icon_img from '../../assets/favicon.ico';

function setImgSrc() {
    const ar1 = document.getElementById('ar_code1');
    const ar2 = document.getElementById('ar_code2');
    const ar3 = document.getElementById('ar_code3');
    const ar4 = document.getElementById('ar_code4');

    const product1 = document.getElementById('product1');
    const product2 = document.getElementById('product2');
    const product3 = document.getElementById('product3');
    const product4 = document.getElementById('product4');

    ar1.src = ar_code_img1;
    ar2.src = ar_code_img2;
    ar3.src = ar_code_img3;
    ar4.src = ar_code_img4;

    product1.src = product_img1;
    product2.src = product_img2;
    product3.src = product_img3;
    product4.src = product_img4;
}

function ar() {
    const renderHeight = 550;
    const gltfLoader = new GLTFLoader();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        60,
        document.documentElement.clientWidth / renderHeight,
        0.1,
        1000,
    );

    window.camera_ar = camera;

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 1;

    let tl = gsap.timeline();

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('.ar__bg'),
        alpha: true,
        antialias: true,
    });

    window.renderer_ar = renderer;
    renderer.setSize(document.documentElement.clientWidth, renderHeight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(-1, 0, 1);
    scene.add(pointLight);

    gltfLoader.load(phone_model, gltf => {
        gltf.scene.name = scene.add(gltf.scene);

        gltf.scene.scale.set(0.15, 0.15, 0.15);
        gltf.scene.rotation.y = -8;
        tl.to(gltf.scene.rotation, { y: 4.5, duration: 4 });
        tl.to(gltf.scene.scale, { x: 0.25, y: 0.25, z: 0.23, duration: 5 }, '-=3');
    });

    function onWindowResize() {
        camera.aspect = document.documentElement.clientWidth / renderHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(document.documentElement.clientWidth, renderHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}

setMetaTag();
setFavicon(icon_img);
setImgSrc();
ar();
