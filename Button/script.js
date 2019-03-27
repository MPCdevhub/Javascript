const colorChanger = document.querySelector('.btn-one');
const colorBg = document.querySelector('body');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black', '#D3D3D3'];

colorChanger.addEventListener('click', change);

function change() {
var random = Math.floor(Math.random() * colors.length);
colorBg.style.backgroundColor = colors[random];
}

