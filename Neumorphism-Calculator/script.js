let input = document.getElementById('input');
let equate = document.getElementById('equate');
let clear = document.getElementById('all-clear');
let buttons = document.querySelectorAll('.btn');

let stateCalculated = false;

equate.addEventListener('click', () => {
	try {
		input.value = eval(input.value);
	} catch (error) {
		console.log(`There's a ${error}`);
		alert('WRITE THE CORRECT EXPRESSION DUMBASS !!!!!!!');
	}
	stateCalculated = true;
	console.log(eval(input.value));
});

clear.addEventListener('click', () => {
	input.value = '';
});

buttons.forEach(element => {
	element.addEventListener('click', () => {
		if (stateCalculated == true) {
			input.value = '';
		}
		input.value += element.innerHTML;
		stateCalculated = false;
	});
});
