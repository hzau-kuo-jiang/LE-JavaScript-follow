let request = require('request');
let url = 'http://shipin.hzau.edu.cn/';

const jsdom = require("jsdom");
const {JSDOM} = jsdom;

request(url, function (error, response, body) {
	let {document} = (new JSDOM(body)).window;
	
	let paragraphs = document.querySelectorAll("p");
	
	paragraphs.forEach(function (paragraph) {
		console.log(paragraph.textContent);
	});
});