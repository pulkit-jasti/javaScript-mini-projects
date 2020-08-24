let bck = document.getElementById('background');
let rgb = document.getElementById('rgb');
let sliderRed = document.getElementById('slider-red');
let sliderGreen = document.getElementById('slider-green');
let sliderBlue = document.getElementById('slider-blue');

let Color;

function updateColours() {
	let r = sliderRed.value;
	let g = sliderGreen.value;
	let b = sliderBlue.value;
	Color = `rgb(${r},${g},${b})`;
	rgb.innerHTML = Color;
	bck.style.backgroundColor = Color;
}

sliderRed.addEventListener('input', updateColours);
sliderGreen.addEventListener('input', updateColours);
sliderBlue.addEventListener('input', updateColours);

const copyToClipboard = () => {
	const el = document.createElement('textarea');
	el.value = Color;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};

document.getElementById('rgb').addEventListener('click', copyToClipboard);
