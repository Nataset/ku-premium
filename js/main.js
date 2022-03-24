pannellum.viewer('panorama__bg', {
    type: 'equirectangular',
    panorama: './static/test360.jpg',
    draggable: false,
    mouseZoom: false,
    autoLoad: true,
    showControls: false,
    autoRotate: -2,
});

(function ar() {
    const gltfLoader = new THREE.GLTFLoader();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        60,
        document.documentElement.clientWidth / 500,
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
    renderer.setSize(document.documentElement.clientWidth, 500);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(-1, 0, 1);
    scene.add(pointLight);

    gltfLoader.load('./static/untitled.gltf', gltf => {
        gltf.scene.scale.set(0.3, 0.3, 0.3);
        gltf.scene.rotation.set(0, 3.3, 0);
        gltf.scene.name = scene.add(gltf.scene);

        tl.to(gltf.scene.rotation, { y: 4.7, duration: 1 });
        tl.to(gltf.scene.scale, { x: 0.2, y: 0.2, z: 0.2, duration: 1 }, '-=1');
        tl.to(gltf.scene.position, { x: -1.25, duration: 1 });
        tl.to(gltf.scene.rotation, { y: 5.0, duration: 1 });
        tl.to(gltf.scene.scale, { x: 0.25, y: 0.25, z: 0.2, duration: 1 }, '-=1');
    });

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
})();

(function metaverse() {
    let scene_meta,
        camera_meta,
        cloudParticles = [],
        composer,
        starArray = [],
        render_meta;

    function init() {
        scene_meta = new THREE.Scene();
        camera_meta = new THREE.PerspectiveCamera(
            60,
            document.documentElement.clientWidth / 500,
            0.01,
            1000,
        );
        camera_meta.position.z = 1;
        camera_meta.rotation.x = 1.16;
        camera_meta.rotation.y = -0.12;
        camera_meta.rotation.z = 0.27;

        window.camera_meta = camera_meta;

        function addStar() {
            const starGeometry = new THREE.SphereGeometry(0.1, 6, 3);
            const material = new THREE.MeshBasicMaterial();
            const star = new THREE.Mesh(starGeometry, material);

            x = Math.random() * 200 - 100;
            y = Math.random() * 100;
            z = Math.random() * 200 - 50;

            star.position.set(x, y, z);
            star.velocity = 0.1;
            star.acceleration = 0.0025;
            scene_meta.add(star);
            return star;
        }

        for (let i = 0; i < 700; i++) {
            starArray.push(addStar());
        }

        let ambient = new THREE.AmbientLight(0x363636);
        scene_meta.add(ambient);

        let directionalLight = new THREE.DirectionalLight(0xff8c19);
        directionalLight.position.set(0, 0, 1);
        scene_meta.add(directionalLight);

        let orangeLight = new THREE.PointLight(0x683500, 50, 450, 1.7);
        orangeLight.position.set(200, 300, 100);
        scene_meta.add(orangeLight);
        let redLight = new THREE.PointLight(0xd8547e, 50, 450, 1.7);
        redLight.position.set(100, 300, 100);
        scene_meta.add(redLight);
        let blueLight = new THREE.PointLight(0x3677ac, 50, 450, 1.7);
        blueLight.position.set(300, 300, 200);
        scene_meta.add(blueLight);

        renderer_meta = new THREE.WebGLRenderer({
            canvas: document.querySelector('.mataverse-bg'),
        });
        window.render_meta = render_meta;
        renderer_meta.setSize(document.documentElement.clientWidth, 500);
        scene_meta.fog = new THREE.FogExp2(0x002a36, 0.001);
        renderer_meta.setClearColor(scene_meta.fog.color);

        let loader = new THREE.TextureLoader();
        loader.load('static/smoke.png', function (texture) {
            cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
            cloudMaterial = new THREE.MeshLambertMaterial({
                map: texture,
                transparent: true,
            });

            for (let p = 0; p < 200; p++) {
                let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
                cloud.position.set(Math.random() * 2000 - 1000, 500, Math.random() * 1000 - 1000);
                cloud.rotation.x = 1.16;
                cloud.rotation.y = -0.12;
                cloud.rotation.z = Math.random() * 2 * Math.PI;
                cloud.material.opacity = 0.35;
                cloudParticles.push(cloud);
                scene_meta.add(cloud);
            }
        });
        loader.load('static/stars.jpg', function (texture) {
            const textureEffect = new POSTPROCESSING.TextureEffect({
                blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
                texture: texture,
            });
            textureEffect.blendMode.opacity.value = 0.3;

            const bloomEffect = new POSTPROCESSING.BloomEffect({
                blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
                kernelSize: POSTPROCESSING.KernelSize.SMALL,
                useLuminanceFilter: true,
                luminanceThreshold: 0.3,
                luminanceSmoothing: 0.75,
            });
            bloomEffect.blendMode.opacity.value = 1.5;

            let effectPass = new POSTPROCESSING.EffectPass(camera_meta, bloomEffect, textureEffect);
            effectPass.renderToScreen = true;

            composer = new POSTPROCESSING.EffectComposer(renderer_meta);
            composer.addPass(new POSTPROCESSING.RenderPass(scene_meta, camera_meta));
            composer.addPass(effectPass);

            render();
        });
    }

    function render() {
        cloudParticles.forEach(p => {
            p.rotation.z += 0.002;
        });
        composer.render(0.1);
        starArray.forEach(mesh => {
            let axis = new THREE.Vector3(0, 1, 0);
            mesh.velocity += mesh.acceleration;
            mesh.translateY(-mesh.velocity);
            // mesh.rotation.y += 0.1;

            if (mesh.position.y < 0) {
                mesh.position.y = 100;
                mesh.velocity = 0.01;
            }
        });
        camera_meta.rotation.z -= 0.002;
        requestAnimationFrame(render);
    }
    init();

    return { camera_meta, render_meta };
})();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    window.camera_meta.aspect = document.documentElement.clientWidth / 500;
    window.camera_meta.updateProjectionMatrix();
    window.renderer_meta.setSize(document.documentElement.clientWidth, 500);

    window.camera_ar.aspect = document.documentElement.clientWidth / 500;
    window.camera_ar.updateProjectionMatrix();
    window.renderer_ar.setSize(document.documentElement.clientWidth, 500);
}
