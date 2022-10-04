// 단어의 개수 세기
// 1. split(' ') : 공백을 기준으로 문자열 나누기(공백 2개 이상인 경우 : '  hi' => '', 'hi'로 나뉨) > 배열 cnt 생성
// 2. filter : 배열의 원소 중 공백을 제외한 원소(진짜 단어)만 추출 > length : 원소(단어) 개수 구하기
// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let cnt = line.split(' ').filter((v)=> v != '').length;
	console.log(cnt);
	rl.close();
}).on("close", function() {
	process.exit();
});