import './index.css';
import favicon_img from '../../../assets/favicon.ico';
import setFavicon from '../../../utitly/setFavicon';
import setMetaTags from '../../../utitly/setMetaTags';
// import vr_icon from '../../../assets/foodTrace/vr-icon.png';
import product_img from '../../../assets/ar/kuMilk.png';
import product_qrcode from '../../../assets/foodTrace/kuMilk/kuMilk-qrcode.png';

// document.getElementById('vr-icon').src = vr_icon;
document.getElementById('product-img').src = product_img;
document.getElementById('product-qrcode').src = product_qrcode;

setFavicon(favicon_img);
setMetaTags();
