const fontSizeControl = document.querySelector('#font-size-control');
const fonts = document.querySelector('#text');

fontSizeControl.addEventListener('input', event => {
    const fontSize = event.target.value;
    text.style.fontSize = `${fontSize}px`;
});