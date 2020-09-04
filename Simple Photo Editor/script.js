let grayscale, Blur, brightness, contrast, hue, opacity, colorInvert, saturate, sepia;

let image = document.getElementById('image');

let sliders = document.querySelectorAll('.slider');

document.getElementById('main-form').addEventListener('submit', e => {
	e.preventDefault();
	document.getElementById('image').src = `${document.getElementById('img-url').value}`;
});

function updateValues() {
	grayscale = document.getElementById('grayscale').value;
	Blur = document.getElementById('blur').value;
	brightness = document.getElementById('brightness').value;
	contrast = document.getElementById('contrast').value;
	hue = document.getElementById('hue').value;
	opacity = document.getElementById('opacity').value;
	colorInvert = document.getElementById('color-invert').value;
	saturate = document.getElementById('saturate').value;
	sepia = document.getElementById('sepia').value;

	image.style.filter = `grayscale(${grayscale}%) blur(${Blur}px) brightness(${brightness}%) contrast(${contrast}%) hue-rotate(${hue}deg) opacity(${opacity}%) invert(${colorInvert}%) saturate(${saturate}%) sepia(${sepia}%) `;
}

sliders.forEach(element => {
	element.addEventListener('click', updateValues);
});

document.getElementById('reset').addEventListener('click', () => {
	document.getElementById('grayscale').value = 0;
	document.getElementById('blur').value = 0;
	document.getElementById('brightness').value = 100;
	document.getElementById('contrast').value = 100;
	document.getElementById('hue').value = 0;
	document.getElementById('opacity').value = 100;
	document.getElementById('color-invert').value = 0;
	document.getElementById('saturate').value = 100;
	document.getElementById('sepia').value = 0;

	grayscale = document.getElementById('grayscale').value;
	Blur = document.getElementById('blur').value;
	brightness = document.getElementById('brightness').value;
	contrast = document.getElementById('contrast').value;
	hue = document.getElementById('hue').value;
	opacity = document.getElementById('opacity').value;
	colorInvert = document.getElementById('color-invert').value;
	saturate = document.getElementById('saturate').value;
	sepia = document.getElementById('sepia').value;

	image.style.filter = `grayscale(${grayscale}%) blur(${Blur}px) brightness(${brightness}%) contrast(${contrast}%) hue-rotate(${hue}deg) opacity(${opacity}%) invert(${colorInvert}%) saturate(${saturate}%) sepia(${sepia}%) `;

	console.log('reset');
});
