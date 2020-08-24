let bck = document.getElementById('background');
let rgb = document.getElementById('rgb');
let sliderRed = document.getElementById('slider-red');
let sliderGreen = document.getElementById('slider-green');
let sliderBlue = document.getElementById('slider-blue');

let r = 40,
	g = 0,
	b = 0,
	a = 0;

function updateColours() {
	let r = sliderRed.value;
	let g = sliderGreen.value;
	let b = sliderBlue.value;
	rgb.innerHTML = `rgb(${r},${g},${b})`;
	bck.style.backgroundColor = `rgb(${r},${g},${b})`;
}

sliderRed.addEventListener('input', updateColours);
sliderGreen.addEventListener('input', updateColours);
sliderBlue.addEventListener('input', updateColours);

/*
sliderBlue.oninput = () => {
	b = sliderGreen.value;
	bck.style.backgroundColor = `rgb(${r},${g},${b})`;
};
*/
