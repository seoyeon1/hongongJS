// 몫 구하기 : / 연산자와 정수값만


// 풀이1 : floor() 소수점 버림
const solution = (num1, num2) => Math.floor(num1 / num2);

// 풀이2 : parseInt() 실수 > 정수로 정수값만 취하기
function solution(num1, num2) {
    return parseInt(num1 / num2);
}