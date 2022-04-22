import './index.css';

import gsap from 'gsap';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import setFavicon from '../../utitly/setFavicon';
import setMetaTag from '../../utitly/setMetaTags';
import phone_model from '../../assets/model/phone.gltf';
import icon_img from '../../assets/favicon.ico';
import qrCode_img from '../../assets/ar/QRCode.png';
const arImages = importAll(require.context('../../assets/ar/', false, /\.(png|jpe?g)$/));

const arContents = [
    {
        title: 'Ku Milk นมเกษตร',
        descrip: `“นมเกษตร” เป็นได้มากกว่านม"<br>
        “นมเกษตร” หรือ KU milk ดำเนินการผลิตโดยมหาวิทยาลัยเกษตรศาสตร์ เป็นผลิตภัณฑ์นมแห่งแรกๆของประเทศไทย ที่ผลิตโดยภาครัฐ ที่คู่ขนานไปกับการเรียนการสอนมาเป็นระยะเวลาอันยาวนานเกินกว่าครึ่งศตวรรษ มาจนถึง ณ วันนี้ เกษตรศาสตร์กำลังจะขับเคลื่อน “ นมเกษตร ให้เป็นได้มากกว่านมและอาหารของคนไทย”<br><span style="font-weight: 600">--- บาท</span>`,
        price: null,
        arImg: arImages[`kuMilk-ar.png`],
        productImg: arImages[`kuMilk.png`],
    },
    {
        title: 'น้ำนมข้าวโพด หวาน 97.8% ไร่สุวรรณ',
        descrip: `น้ำนมข้าวโพดแท้ ส่งตรงมาจากไร่สุวรรณ ดื่นง่าย หวานชื่นใจ เครื่องดื่มสุดอร่อย อุดมด้วยคุณค่าทางโภชนาการ ผลิตจำหน่ายสดใหม่วันต่อวัน โดยศูนย์วิจัยข้าวโพดและข้าวฟ่างแห่งชาติ มหาวิทยาลัยเกษตรศาสตร์ จังหวัดนครราชสีมา <br><span style="font-weight: 600">25 บาท</span>`,
        price: 25,
        arImg: arImages[`cornMilk-ar.png`],
        productImg: arImages[`cornMilk.png`],
    },
    {
        title: 'ชากัญชา KU Cannafe',
        descrip: `เครื่องน้ำชาผสมกัญชา เป็นหนึ่งในผลงานวิจัยจากคณะเกษตร มหาวิทยาลัยเกษตรศาสตร์<br><span style="font-weight: 600">--- บาท</span>`,
        price: null,
        arImg: arImages[`canabisTea-ar.png`],
        productImg: arImages[`canabisTea.png`],
    },
    {
        title: 'เนื้อวากิว มหาลัยเกษตร',
        descrip: `เนื้อวากิวเกรดพรีเมียม สามารถนำไปประกอบเป็นอาหารได้หลายอย่าง ผลิตภัณฑ์จากมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน<br><span style="font-weight: 600">--- บาท</span>`,
        price: null,
        arImg: arImages[`wagyuBeef-ar.png`],
        productImg: arImages[`wagyuBeef.png`],
    },
    {
        title: 'KAPIOKU Cleansing Water',
        descrip: `ผลิตภัณฑ์เช็ดทำความสะอาดเครื่องสำอางสูตรอ่อนโยน ช่วยขจัดสิ่งสกปรก น้ำมันส่วนเกิน และเครื่องสำอางบนใบหน้า พร้อมทั้งมีสารบำรุงผิวที่จะช่วยปลอบประโลมผิว คงความชุ่มชื้นให้กับผิวด้วยเนื้อสัมผัสแบบน้ำ จึงไม่เหนียวเหนอะหนะปราศจากน้ำหอม และสารพาราเบน และ เหมาะกับทุกสภาพผิว<br><span style="font-weight: 600">250 บาท</span>`,
        price: 250,
        arImg: arImages[`cleansingWater-ar.png`],
        productImg: arImages[`cleansingWater.png`],
    },

    {
        title: 'KAPIOKU Cleansing Gel',
        descrip: `เจลทำความสะอาดผิวหน้าสูตรอ่อนโยน ที่เหมาะกับทุกสภาพผิว ช่วยทำความสะอาดผิวได้หมดจดจริงๆไม่ว่าจะเป็น ฝุ่น มลภาวะ ส่วนใครที่มีปัญหาสิว หรือมีแนวโน้มที่เป็นสิวง่ายก็ยิ่งตอบโจทย์เนื่องจากมีส่วนผสมของน้ำมันหอมระเหยเสม็ดขาว และสารสกัดจากชาเขียวออร์แกนิค<br><span style="font-weight: 600">150 บาท</span>`,
        price: 150,
        arImg: arImages[`cleansingGel-ar.png`],
        productImg: arImages[`cleansingGel.png`],
    },
    {
        title: 'KAPIOKU Anti Acne',
        descrip: `เซรั่มที่ช่วยดูแลปัญหาผิวที่มีสิวโดยเฉพาะช่วยควบคุมความมัน อันเป็นสาเหตุหนึ่งของการเกิดสิว ผสานด้วยสารบำรุงผิวที่เข้มข้น จึงช่วยปลอบประโลมผิว เติมความชุ่มชื้นให้ผิวเนียนนุ่ม ผิวแลดูกระจ่างใส จุดด่างดำจากสิวดูลดเลือนลง เมื่อใช้เป็นประจำอย่างต่อเนื่อง เนื้อเซรั่มมีความบางเบา ไม่เหนียวเหนอะหนะ มาพร้อมกลิ่นหอมผ่อนคลายจากน้ำมันหอมระเหยเสม็ดขาว ผลิตภัณฑ์ไม่มีส่วนผสมของ paraben และ น้ำหอม์<br><span style="font-weight: 600">390 บาท</span>`,
        price: 390,
        arImg: arImages[`kapiAntiAcne-ar.png`],
        productImg: arImages[`kapiAntiAcne.png`],
    },
    {
        title: 'Fruit Vinegar Drink น้ำส้มสายชูผสมน้ำผลไม้',
        descrip: `เครื่องดื่มหมักจากธรรมชาติ มีคุณสมบัติช่วยลดคอเลสเตอรอล ช่วยลดไตรกลีเซอร์ไรด์และไขมันชนิด low-density lipoprotein (LDL) มีสารต้านอนุมูลอิสระ ช่วยชะลอวัย และป้องกันโรคมะเร็ง ช่วยย่อยอาหาร ไม่แต่งกลิ่น ไม่เจือสีสังเคราะห์ ไม่ใช้วัตถุกันเสีย ดื่มง่าย<br><span style="font-weight: 600">--- บาท</span>`,
        price: null,
        arImg: arImages[`ciderVinegar-ar.png`],
        productImg: arImages[`ciderVinegar.jpg`],
    },
];

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item).default;
    });
    return images;
}

function addInfoElement(arContents) {
    const mainDiv = document.querySelector('.more-info');
    arContents.forEach(product => {
        let info = document.createElement('div');
        let content = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let imgDiv = document.createElement('div');
        let arImg = document.createElement('img');
        let productImg = document.createElement('img');

        info.className = 'more-info__feature';
        content.className = 'more-info__content';
        h3.className = 'more-info__title';
        p.className = 'more-info__descrip';
        imgDiv.className = 'more-info__img';
        arImg.className = 'more-info__ar-code';
        productImg.className = 'more-info__product';

        h3.innerText = product.title;
        p.innerHTML = product.descrip;
        arImg.src = product.arImg;
        productImg.src = product.productImg;

        info.appendChild(content);
        content.appendChild(h3);
        content.appendChild(p);
        info.appendChild(imgDiv);
        imgDiv.appendChild(arImg);
        imgDiv.appendChild(productImg);

        mainDiv.appendChild(info);
    });
}

function loadQRCodeImg() {
    const img = document.getElementById('qr-code');
    img.src = qrCode_img;
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
loadQRCodeImg();
addInfoElement(arContents);
ar();
