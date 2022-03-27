document.querySelectorAll('.shop-photo__text').forEach(el => {
    el.addEventListener('mouseover', event => {});
});

document.querySelector('.shop__button').addEventListener('click', () => {
    let content = document.querySelector('.modal__contents');
    content.style.height = 'auto';
    content.style.overflow = 'hidden';
    document.querySelector('.modal').classList.toggle('modal--hidden');
    document.querySelector('.modal__title').textContent = 'THE PREMIUM @KU CONCEPT';
    document.querySelector(
        '.modal__descrip',
    ).innerHTML = `The Premium @ KU ภายใต้ KUniverse เป็นการบูรณาการความโดดเด่นด้านวิชาการและผลงานวิจัยของนิสิต นักวิจัย และคณาจารย์จากคณะวิชา สถาบัน และศูนย์วิจัยต่างๆ ของมหาวิทยาลัยเกษตรศาสตร์  
    <br><br>
    อีกทั้งเป็นแหล่งการเรียนรู้ ให้นิสิตได้ฝึกฝนทักษะวิชาชีพนอกห้องเรียนจากการทำงานจริง ให้นิสิตปัจจุบันและนิสิตเก่าเข้ามามีส่วนร่วมในการสร้างสรรค์นวัตกรรมคุณภาพให้แก่ The Premium 
    <br><br>
    Smart farmer  AgriPrenuer และ SME ยกระดับมาตรฐานสินค้าและบริการของ ประชาชนสู่ตลาดระดับชาติและนานาชาติ
    <br><br>
    The Premium @ KU จะช่วยพัฒนาคน พัฒนานวัตกรรมสินค้าและบริการอย่างมีมาตรฐาน เป็นศูนย์กลางการเรียนรู้ BCG economy ของประเทศ ในระดับชาติและระดับโลก`;
});

document.querySelector('.metaverse__info').addEventListener('click', () => {
    let content = document.querySelector('.modal__contents');
    content.style.height = '90%';
    content.style.overflow = 'auto';
    document.querySelector('.modal').classList.toggle('modal--hidden');
    document.querySelector('.modal__title').textContent = 'KUniverse CONCEPT';

    document.querySelector(
        '.modal__descrip',
    ).innerHTML = `มหาวิทยาลัยเกษตรศาสตร์มีนโยบายเชิงรุกที่เรียกว่า KUniverse เพื่อขับเคลื่อนการดำเนินงานของมหาวิทยาลัยและหน่วยงานทุกหน่วยงาน ให้สนับสนุนการพัฒนาและขับเคลื่อนเศรษฐกิจประเทศไทยตาม BCG Model <br><br> โดยอุตสาหกรรมการเกษตร จัดเป็นส่วนสำคัญที่สามารถมูลค่าเพิ่มให้กับเศรษฐกิจประเทศไทย เพื่อผลิตเป็นผลิตภัณฑ์มูลค่าสูงควบคู่ไปกับการนำวัสดุต่างๆ รวมถึงวัสดุเหลือใช้ หรือทิ้งแล้วกลับมาใช้ประโยชน์ให้ได้มากที่สุด <br><br>ตามแนวคิดเศรษฐกิจหมุนเวียน (Circular Economy) ที่เน้นการพัฒนาอย่างยั่งยืน (Sustainability)  สร้างการกระจายรายได้สู่ชุมชนลดความเหลื่อมล้ำ สร้างชุมชนเข้มแข็ง มีความเป็นมิตรกับสิ่งแวดล้อม และเน้นการพัฒนาที่ยั่งยืน เพื่อประชาชนคนไทยรุ่นต่อไป (Next Thailand)
    <br><br>BCG Model ของมหาวิทยาลัยเกษตรศาสตร์  ถูกขับเคลื่อนในจักรวาล KUniverse ซึ่งมหาวิทยาลัยเกษตรศาสตร์กำลังทำหน้าที่เป็นส่วนหนึ่งของโลกเศรษฐกิจ เพื่อเพิ่มคุณภาพชีวิต และเป็นมิตรกับสิ่งแวดล้อม  (Enhancing Our Quality of Life and the Environment) ด้วยบทบาทสำคัญ 7 ประการ
    
    <br><br>1. สร้างองค์ความรู้ให้นิสิต เกษตรกร และผู้ประกอบการ
    <br><br>2. มุ่งเน้นการวิจัยและพัฒนาที่นำนวัตกรรม และเทคโนโลยีมาช่วยสร้างมูลค่าเพิ่มของสินค้าและบริการของ SMEs และเกษตรกรรม
    <br><br>3. บริการรับรองคุณภาพ และมาตรฐานสินค้า เพื่อยกระดับความน่าเชื่อถือ ของสินค้าและบริการ 
    <br><br>4. ติดอาวุธให้เกษตรกร และผู้ประกอบการผ่านงานบริการวิชาการ และปรึกษา
    <br><br>5. สร้าง KU Market Place ที่ใช้หลักการเศรษฐกิจสีเขียว (Green Economy)
    <br><br>6. สร้าง KU Business Ecosystem พร้อมทั้งผนึกกำลังการส่งเสริมผ่านทุกวิทยาเขตของมหาวิทยาลัยเกษตรศาสตร์
    <br><br>7. จัดตั้ง Spin-Off Company ภายใต้ KU Holding Company เพื่อขับเคลื่อนการดำเนินงานที่สนับสนุนภาคเอกชนได้สะดวกและรวดเร็วยิ่งขึ้น`;
});

document.querySelector('.modal__close-bar').addEventListener('click', () => {
    document.querySelector('.modal').classList.toggle('modal--hidden');
});

pannellum.viewer('panorama__bg', {
    type: 'equirectangular',
    panorama: './static/360.jpg',
    // panorama: 'https://pannellum.org/images/alma.jpg',
    draggable: false,
    mouseZoom: false,
    autoLoad: true,
    showControls: false,
    autoRotate: -2,
});

const camera_width = document.documentElement.clientWidth;
const render_height = camera_width >= 700 ? 500 : 800;
(function ar() {
    const manager = new THREE.LoadingManager();
    const gltfLoader = new THREE.GLTFLoader(manager);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, camera_width / 500, 0.1, 1000);

    window.camera_ar = camera;

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = -1;

    let tl = gsap.timeline();

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('.ar__bg'),
        alpha: true,
        antialias: true,
    });

    window.renderer_ar = renderer;
    renderer.setSize(camera_width, 500);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(-1, 0, 1);
    scene.add(pointLight);

    gltfLoader.load('./static/phone.gltf', gltf => {
        gltf.scene.name = scene.add(gltf.scene);
        window.phone = gltf.scene;

        manager.onLoad = () => {
            const ar_el = document.querySelector('.ar__content');
            const observer = new IntersectionObserver(
                function (entries) {
                    if (entries[0].isIntersecting === true) {
                        console.log('Element has just become visible in screen');

                        if (camera_width >= 1200) {
                            phone.scale.set(0.3, 0.3, 0.3);
                            phone.rotation.set(0, 3.3, 0);

                            tl.to(phone.rotation, { y: 4.7, duration: 1 });
                            tl.to(camera.position, { z: 1, duration: 2 }, '-=2');
                            tl.to(phone.scale, { x: 0.2, y: 0.2, z: 0.2, duration: 2 }, '-=2');
                            tl.to(phone.position, { x: -1, duration: 1 });
                            tl.to(phone.rotation, { y: 4.5, duration: 1 });
                            tl.to(phone.scale, { x: 0.23, y: 0.23, z: 0.23, duration: 1 }, '-=1');
                        } else {
                            phone.scale.set(0.2, 0.2, 0.2);
                            phone.position.y += 0.07;
                            tl.to(phone.rotation, { y: 4.5, duration: 2 });
                            tl.to(camera.position, { z: 1, duration: 2 }, '-=3');
                            tl.to(phone.scale, { x: 0.23, y: 0.23, z: 0.23, duration: 2 }, '-=1');
                        }
                        animate();
                        ar_el.classList.add('ar__animation');
                        observer.unobserve(ar_el);
                    }
                },
                { threshold: [0] },
            );

            observer.observe(ar_el);
            window.addEventListener('resize', onWindowResize, false);
        };
    });

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
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
        camera_meta = new THREE.PerspectiveCamera(60, camera_width / render_height, 0.01, 1000);
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
            canvas: document.querySelector('.metaverse__bg'),
        });
        window.render_meta = render_meta;
        renderer_meta.setSize(camera_width, render_height);
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

            const meta_el = document.querySelector('.metaverse');
            const observer2 = new IntersectionObserver(
                function (entries) {
                    if (entries[0].isIntersecting === true) {
                        render();
                        observer2.unobserve(meta_el);
                    }
                },
                { threshold: [0] },
            );

            observer2.observe(meta_el);
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

function onWindowResize() {
    if (document.documentElement.clientWidth >= 700) {
        window.camera_meta.aspect = document.documentElement.clientWidth / 500;
        window.camera_meta.updateProjectionMatrix();
        window.renderer_meta.setSize(document.documentElement.clientWidth, 500);
    } else {
        window.camera_meta.aspect = document.documentElement.clientWidth / 800;
        window.camera_meta.updateProjectionMatrix();
        window.renderer_meta.setSize(document.documentElement.clientWidth, 800);
    }

    if (document.documentElement.clientWidth > 1200) {
        window.camera_ar.aspect = document.documentElement.clientWidth / 500;
        window.camera_ar.updateProjectionMatrix();
        window.renderer_ar.setSize(document.documentElement.clientWidth, 500);
        window.phone.position.x = -1;
        window.phone.position.y = 0;
        window.phone.position.z = 0;
    } else {
        window.camera_ar.aspect = document.documentElement.clientWidth / 500;
        window.camera_ar.updateProjectionMatrix();
        window.renderer_ar.setSize(document.documentElement.clientWidth, 500);
        window.phone.position.x = 0;
        window.phone.position.y = 0.07;
        window.phone.position.z = 0;
    }
}
