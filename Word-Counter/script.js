let ignoreWordLimitWarning = false;
let ignoreCharacterLimitWarning = false;
let wordLimit = 0;

setInterval(() => {
	let sentence = document.getElementById('main-input').value;

	let Words = sentence.split(' ');
	let wordsLen = Words.length;

	if (sentence.length == 0) {
		wordsLen = 0;
	}

	if (sentence[sentence.length - 1] == ' ') {
		wordsLen -= 1;
	}

	if (wordsLen > wordLimit && ignoreWordLimitWarning == false) {
		enableWordLimit();
	}

	if (sentence.length > 10 && ignoreCharacterLimitWarning == false) {
		//enableCharLimit();
	}

	console.log(wordsLen);
	document.getElementById('word-count').innerHTML = `Words: ${wordsLen}`;
	document.getElementById('char-count').innerHTML = `Characters: ${sentence.length}`;
	document.getElementById('word-lim').innerHTML = `Word Limit: ${wordLimit}`;
}, 100);

//WORD LIMIT FUNCTIONS

let enableSetWordLimit = () => {
	console.log('set word limit window enabled');
	document.getElementById('set-word-limit').style.display = 'flex';
};

let submitWordLimit = () => {
	console.log(document.getElementById('word-limit-input').value);
	wordLimit = document.getElementById('word-limit-input').value;
	document.getElementById('set-word-limit').style.display = 'none';
};

let enableWordLimit = () => {
	document.getElementById('word-limit-overlay').style.display = 'flex';
	document.getElementById('main-input').maxLength = 0;
};

let disableWordLimitWarning = () => {
	document.getElementById('word-limit-overlay').style.display = 'none';
	ignoreWordLimitWarning = true;
	document.getElementById('main-input').maxLength = 524288; //default
};

// WORD LIMIT FUNCTIONS ENDS

let enableSetCharLimit = () => {
	console.log('set character limit window enabled');
	document.getElementById('set-char-limit').style.display = 'flex';
};

let enableCharLimit = () => {
	console.log('character limit is enabled');
	document.getElementById('main-input').maxLength = 0;
	document.getElementById('char-limit-overlay').style.display = 'flex';
};

let setCharacterLimit = () => {
	console.log('character limit set');
};

let disableCharLimitWarning = () => {
	document.getElementById('char-limit-overlay').style.display = 'none';
	document.getElementById('main-input').maxLength = 524288; //default
};
