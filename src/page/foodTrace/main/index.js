import './index.css';
import favicon_img from '../../../assets/favicon.ico';
import setFavicon from '../../../utitly/setFavicon';
import setMetaTags from '../../../utitly/setMetaTags';
const images = importAll(require.context('../../../assets/ar/', false, /\.(png|jpe?g)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item).default;
    });
    return images;
}

const products = [
    {
        title: 'น้ำนมข้าวโพดหวานไร่สุวรรณ',
        img_src: images['cornMilk.png'],
        link: './cornMilk',
    },
    {
        title: 'นมเกษตร (KU Milk)',
        img_src: images['kuMilk.png'],
        link: './kuMilk',
    },

    {
        title: 'ชากัญชา (KU Cannafe)',
        img_src: images['canabisTea.png'],
        link: './kuCannafe',
    },
    {
        title: 'เนื้อวากิวกำแพงแสน',
        img_src: images['wagyuBeef.png'],
        link: './kuWagyu',
    },
    {
        title: 'KAPIOKU Cleansing Water',
        img_src: images['cleansingWater.png'],
        link: './kapioku',
    },
    {
        title: 'KAPIOKU Cleansing Gel',
        img_src: images['cleansingGel.png'],
        link: './kapioku',
    },
    {
        title: 'KAPIOKU Anti-acne',
        img_src: images['kapiAntiAcne.png'],
        link: './kapioku',
    },
];

function createProductDiv(title, img_src, link) {
    let a = document.createElement('a');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let img_wrapper = document.createElement('div');
    let img = document.createElement('img');

    div.className = 'product-info__content';
    img_wrapper.className = 'product-info__img-wrapper';

    h2.innerText = title;
    img.src = img_src;
    a.href = link;

    img_wrapper.appendChild(img);
    div.appendChild(h2);
    div.appendChild(img_wrapper);
    a.appendChild(div);

    return a;
}

function addProductToPage() {
    const product_div = document.createElement('div');
    product_div.className = 'product-info';
    const wapper = document.querySelector('.wapper');

    products.forEach(product => {
        const new_product = createProductDiv(product.title, product.img_src, product.link);
        product_div.appendChild(new_product);
    });

    wapper.appendChild(product_div);
}

setFavicon(favicon_img);
setMetaTags();
addProductToPage();
