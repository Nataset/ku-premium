(function ar() {
    const renderHeight = 550;
    const gltfLoader = new THREE.GLTFLoader();
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

    gltfLoader.load('../static/phone.gltf', gltf => {
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
})();
