let ignore = false;
let wordLimit = 5;

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

	if (wordsLen > wordLimit && ignore == false) {
		enableWarning();
	}

	console.log(wordsLen);
	document.getElementById('word-count').innerHTML = `Words: ${wordsLen}`;
	document.getElementById('char-count').innerHTML = `Characters: ${sentence.length}`;
	document.getElementById('word-lim').innerHTML = `Word Limit: ${wordLimit}`;
}, 100);

let enableWarning = () => {
	document.getElementById('overlay').style.display = 'flex';
	document.getElementById('main-input').maxLength = 0;
};

let disableWarning = () => {
	document.getElementById('overlay').style.display = 'none';
	ignore = true;
	document.getElementById('main-input').maxLength = 524288; //default
};

let enableSetWordLimit = () => {
	console.log('set limit window enabled');
	document.getElementById('set-word-limit').style.display = 'flex';
};

let setWordLimit = () => {
	console.log(document.getElementById('word-limit-input').value);
	wordLimit = document.getElementById('word-limit-input').value;
	document.getElementById('set-word-limit').style.display = 'none';
};
