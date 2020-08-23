let ignore = false;

setInterval(() => {
	let sentence = document.getElementById('main-input').value;
	document.getElementById('display').innerHTML = sentence;

	let Words = sentence.split(' ');
	let wordsLen = Words.length;

	if (sentence.length == 0) {
		wordsLen = 0;
	}

	if (sentence[sentence.length - 1] == ' ') {
		wordsLen -= 1;
	}

	if (wordsLen > 5 && ignore == false) {
		document.getElementById('overlay').style.display = 'flex';
		document.getElementById('main-input').maxLength = sentence.length;
	}

	//console.log(wordCount);
	console.log(wordsLen);
	document.getElementById('display').innerHTML = `Words: ${wordsLen}`;

	let wordLimit = 5;

	//document.getElementById('overlay').style.display = 'flex';
}, 100);

let disableWarning = () => {
	document.getElementById('overlay').style.display = 'none';
	ignore = true;
	document.getElementById('main-input').maxLength = 524288;
};
