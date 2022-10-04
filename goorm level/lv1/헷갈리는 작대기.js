// 헷갈리는 작대기
// 입력된 문자열 S 속 1, I, l, |의 개수 출력
// 구름ide, readline 모듈이 아직 익숙하지 않음 > 꾸준히 문제 풀어보면서 익숙해지자!
// 반복, 조건문으로 풀었지만 re이나 filter를 이용한 풀이도 시도해보자
// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [one, I, L, or] = [0,0,0,0]; // 문자열 속 각 문자의 개수를 저장할 변수

	let S = line.split('');
	// console.log(S);
	for(let i of S){ // for문과 if~else if문으로 각 문자 개수 카운팅
		if(i == '1') one++;
		else if (i == 'I') I++;
		else if (i == 'l') L++;
		else if (i == '|') or++;
	}

	console.log(one);
	console.log(I);
	console.log(L);
	console.log(or);
	rl.close();
});
