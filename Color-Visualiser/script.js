let bckGround = document.getElementById('background');
let rgbBtn = document.getElementById('rgb');
let hexBtn = document.getElementById('hex');
let sliderRed = document.getElementById('slider-red');
let sliderGreen = document.getElementById('slider-green');
let sliderBlue = document.getElementById('slider-blue');

let rgbString, hexString;
let r, g, b;

function updateColours() {
	r = sliderRed.value;
	g = sliderGreen.value;
	b = sliderBlue.value;

	rgbString = rgbColor();
	hexString = hexColor();

	rgbBtn.innerHTML = rgbString;
	hexBtn.innerHTML = hexString;

	bckGround.style.backgroundColor = rgbString;
}

let rgbColor = () => {
	return `rgb(${r},${g},${b})`;
};

updateColours();

sliderRed.addEventListener('input', updateColours);
sliderGreen.addEventListener('input', updateColours);
sliderBlue.addEventListener('input', updateColours);

const copyRGBToClipboard = () => {
	const el = document.createElement('textarea');
	el.value = rgbString;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};

const copyHEXToClipboard = () => {
	const el = document.createElement('textarea');
	el.value = hexString;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};

rgbBtn.addEventListener('click', copyRGBToClipboard);
hexBtn.addEventListener('click', copyHEXToClipboard);

function hexColor() {
	let mAp = ['a', 'b', 'c', 'd', 'e', 'f'];
	let char1;
	let char2;
	let flag = 0;
	let colr = r;
	let mainString = '';

	function convert(char) {
		let finalChar;
		char > 9 ? (finalChar = mAp[char - 10]) : (finalChar = `${char}`);
		return finalChar;
	}

	for (let i = 0; i < 6; i++) {
		i > 1 && i < 4 ? (colr = g) : i > 3 ? (colr = b) : console.log('loop end');

		char1 = Math.floor(colr / 16);
		char2 = (colr / 16 - char1) * 16;

		if (flag == 0) {
			mainString += convert(char1);
			flag = 1;
		} else {
			mainString += convert(char2);
			flag = 0;
		}
	}
	console.log(mainString);
	return `#${mainString}`;
}
