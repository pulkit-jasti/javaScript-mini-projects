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

	//console.log(wordCount);
	console.log(wordsLen);
}, 100);
