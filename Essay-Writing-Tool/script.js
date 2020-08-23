let wordLimitExist = false;
let charLimitExist = false;
let wordLimit = 0;
let charLimit = 0;

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

	if (wordLimitExist == true) {
		if (wordsLen > wordLimit) {
			enableWordLimit();
		}
		document.getElementById('word-lim').innerHTML = `Word Limit: ${wordLimit}`;
	} else {
		document.getElementById('word-lim').innerHTML = `Word Limit: None`;
	}

	if (charLimitExist == true) {
		if (sentence.length > charLimit) {
			enableCharLimit();
			//console.log('character limit exceeded');
		}
		document.getElementById('char-lim').innerHTML = `Character Limit: ${charLimit}`;
	} else {
		document.getElementById('char-lim').innerHTML = `Character Limit: None`;
	}

	console.log(wordsLen);
	document.getElementById('word-count').innerHTML = `Words: ${wordsLen}`;
	document.getElementById('char-count').innerHTML = `Characters: ${sentence.length}`;
}, 100);

//WORD LIMIT FUNCTIONS

let enableSetWordLimit = () => {
	document.getElementById('set-word-limit').style.display = 'flex';
};

let submitWordLimit = () => {
	wordLimit = document.getElementById('word-limit-input').value;
	wordLimitExist = true;
	document.getElementById('set-word-limit').style.display = 'none';
};

let enableWordLimit = () => {
	document.getElementById('word-limit-overlay').style.display = 'flex';
	document.getElementById('main-input').maxLength = 0;
};

let disableWordLimitWarning = () => {
	document.getElementById('word-limit-overlay').style.display = 'none';
	document.getElementById('main-input').maxLength = 524288; //default
	wordLimitExist = false;
};

// WORD LIMIT FUNCTIONS ENDS
//

//
// CHARACTER LIMIT FUNCTIONS

let enableSetCharLimit = () => {
	document.getElementById('set-char-limit').style.display = 'flex';
};

let submitCharLimit = () => {
	charLimit = document.getElementById('char-limit-input').value;
	charLimitExist = true;
	document.getElementById('set-char-limit').style.display = 'none';
};

let enableCharLimit = () => {
	document.getElementById('main-input').maxLength = 0;
	document.getElementById('char-limit-overlay').style.display = 'flex';
};

let disableCharLimitWarning = () => {
	document.getElementById('char-limit-overlay').style.display = 'none';
	document.getElementById('main-input').maxLength = 524288; //default
	charLimitExist = false;
	//ignoreCharacterLimitWarning = true;
};

// CHARACTER LIMIT FUNCTIONS ENDS
