// 직각삼각형 출력하기 - 별찍기 문제

// 어쩌다보니 [TIL]
// 지금까진 solution()에 구현했지 readline 모듈을 사용해본 적이 거의 없어서 이 같이 `JS 입출력 - JS에서 입력값을 받는 코드`를 봤을 때 약간 당황했지만
// 저번 구름 챌린지를 할 때 처음 보고 추가 공부한 덕분에 각 코드가 어떤 의미인지는 이해한 상태
// 그때는 입출력을 제대로 공부해본 적이 없어서 당황한 채로 급하게 간단히 파이썬 기초 문법 체크, 파이썬으로 다 풀었지만...

// JS를 사용하는 목적, 핵심 중 하나가 `이벤트 처리`인데 문법들을 익히고 코테 준비, 알고리즘 문제만 계속 풀다보니 입출력이나 이벤트 처리 개념이 부족하다
// react 공부하면서 이벤트도 많이 만들어 보고 이런 실질적인 개념들을 다시 공부해야겠다

// 그때 개념 이해했는데 문제에 어떻게 적용해 풀지가 잘 안와닿은 상태였음 
// 그래서 이번에도 입력값이 숫자 1개라 input을 따로 안쓰고 거기다가 바로 문제를 풀었지
// 혼자서 공부하다보니 평소 알고리즘 문제 풀 때도 스스로 문제를 해결한 뒤, 
// 추가 공부로 문제를 검색해서 다른 사람들의 접근법 / 풀이를 읽어보면서 새로운 내장 함수, 접근 방식을 공부하는 편이다 
// 프로그래머스는 정답을 맞추면 그 자리에서 [다른 사람의 풀이]를 모아볼 수 있으니까 편하고 좋음 
// 그래서 그런지 이번 문제를 풀면서 다른 사람들의 풀이를 보니까 어떤 식으로 사용할 지 제대로 알겠음
// 이번에 보니까 0단계가 생겼던데 0단계부터 차근차근 올라가자 1단계부터는 docker/react도 병행할 수 있게 조절하고

// [순서]
// 1. line이벤트 때 받은 입력값을 input에 담아두고
// 2. 아래에 따로 함수(solution())를 선언, 문제 풀이
// 3. close이벤트 때 구현한 함수를 호출


// [나의 풀이]
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];


rl.on('line', function (line) {
    for(let i = 1; i <= line; i++){
        console.log('*'.repeat(i));
    }
}).on('close', function () {
});


// [다른 사람의 풀이]
const readline = require('readline');
const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input2 = [];

// on() : 이벤트가 발생 시, 실행할 동작 지정
// line 이벤트 생성
rl2.on('line', function (line) {
    input2 = line.split(' '); // 공백 기준 입력값 파싱. 문자형숫자 > 정수형 : 뒤에다가 .map(v=> parseInt(v)); 추가
    // if) 여러줄 입력인 경우, line이벤트에 close 이벤트를 호출하지 않고 close 이벤트를 따로 분리해서 작성. 들어온 입력들은 파싱해서 input 배열에 push, 저장. 
    // 이 경우 종료 조건을 따로 작성해서 close()를 호출하든 ctrl+c로 강제종료 가능
}).on('close', function () {
    solution(Number(input[0]));
});

function solution(n) {
    for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}