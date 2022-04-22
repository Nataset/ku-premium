import './index.css';
const images = importAll(require.context('../../assets/foodTrace/', false, /\.(png|jpe?g)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item).default;
    });
    return images;
}

document.getElementById('step1_img').src = images['step1.png'];
document.getElementById('step1-qr_img').src = images['step1-qr.png'];
document.getElementById('step2_img').src = images['step2.png'];
document.getElementById('step2-qr_img').src = images['step2-qr.png'];
document.getElementById('step3_img').src = images['step3.png'];
document.getElementById('step3-qr_img').src = images['step3-qr.png'];
document.getElementById('step4_img').src = images['step4.png'];
document.getElementById('step4-qr_img').src = images['step4-qr.png'];
document.getElementById('step5_img').src = images['step5.png'];
document.getElementById('step5-qr_img').src = images['step5-qr.png'];
document.getElementById('step6_img').src = images['step6.png'];
document.getElementById('step6-qr_img').src = images['step6-qr.png'];
