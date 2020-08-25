let input = document.getElementById('input');
let equate = document.getElementById('equate');
let clear = document.getElementById('all-clear');
let buttons = document.querySelectorAll('.btn');

let stateCalculated = false;

equate.addEventListener('click', () => {
	try {
		if (input.value == 66) {
			alert('EXECUTING ORDER 66 MY LORD');
		} else {
		}
		input.value = eval(input.value);
	} catch (error) {
		console.log(`There's a ${error}`);
		alert('WRITE THE CORRECT EXPRESSION DUMBASS !!!!!!!');
		input.value = '';
	}
	stateCalculated = true;
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
