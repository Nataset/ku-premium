import thumbnail from '../assets/thumbnail.jpg';

export default function setMetaTag() {
    const meta_thumb = document.createElement('meta');
    meta_thumb.property = 'og:image';
    meta_thumb.content = thumbnail;
    document.getElementsByTagName('head')[0].appendChild(meta_thumb);

    const meta_url = document.createElement('meta');
    meta_url.property = 'og:url';
    meta_url.content = 'https://premium.ku.ac.th/index.html';
    document.getElementsByTagName('head')[0].appendChild(meta_url);
}
