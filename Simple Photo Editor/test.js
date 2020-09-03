let grayscale, Blur, brightness, contrast, hue, opacity, colorInvert, saturate, sepia;

let image = document.getElementById('image');

let sliders = document.querySelectorAll('.slider');

console.log(sliders);
document.getElementById('main-form').addEventListener('submit', e => {
	e.preventDefault();
	console.log(document.getElementById('image').src);
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

	image.style.filter = `grayscale(${grayscale}%) blur(${Blur}px) brightness(${brightness}%) contrast(${contrast}%) opacity(${opacity}%)`;
	/*hue(${ hue }deg) opacity(${ opacity } %) invert(${ colorInvert } %) saturate(${ saturate } %) sepia(${ sepia } %) */
}

sliders.forEach(element => {
	element.addEventListener('click', updateValues);
});

//document.getElementById('grayscale').addEventListener('click', updateValues);
//document.getElementById('blur').addEventListener('click', updateValues);
