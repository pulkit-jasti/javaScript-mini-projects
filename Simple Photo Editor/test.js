document.getElementById('main-form').addEventListener('submit', e => {
	e.preventDefault();
	document.getElementById('image').src = `${console.log(document.getElementById('img-url').value)}`;
	console.log(document.getElementById('image').src);
});

let image = document.getElementById('image');

//image.style.filter = 'grayscale(100%)';

document.getElementById('grayscale').addEventListener('input', () => {
	image.style.filter = `grayscale(${document.getElementById('grayscale').value}%)`;
});

/*
document.getElementById('blur').addEventListener('input',()=>{
    image.style.filter = `(${document.getElementById('').value})`
})*/

document.getElementById('blur').addEventListener('input', () => {
	image.style.filter = `blur(${document.getElementById('blur').value}px)`;
});

document.getElementById('brightness').addEventListener('input', () => {
	image.style.filter = `brightness(${document.getElementById('brightness').value}%)`;
});

document.getElementById('contrast').addEventListener('input', () => {
	image.style.filter = `contrast(${document.getElementById('contrast').value}%)`;
});

document.getElementById('hue').addEventListener('input', () => {
	image.style.filter = `hue-rotate(${document.getElementById('hue').value}deg)`;
	console.log(document.getElementById('hue').value);
});

document.getElementById('opacity').addEventListener('input', () => {
	image.style.filter = `opacity(${document.getElementById('opacity').value}%)`;
});

document.getElementById('color-invert').addEventListener('input', () => {
	image.style.filter = `invert(${document.getElementById('color-invert').value}%)`;
});

document.getElementById('saturate').addEventListener('input', () => {
	image.style.filter = `saturate(${document.getElementById('saturate').value}%)`;
});

document.getElementById('sepia').addEventListener('input', () => {
	image.style.filter = `sepia(${document.getElementById('sepia').value}%)`;
});
