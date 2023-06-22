let request = require('request');
let Phrase = require('kuo-jiang');
const fs = require("fs");
let url = 'https://cdn.learnenough.com/phrases.txt'

request(url, function (error, response, body) {
	body.split("\n").forEach(function (line) {
		let phrase = new Phrase(line);
		if (phrase.palindrome()) {
			console.log(`palindrome detected: "${phrase.content}"`);
		}
	});
});