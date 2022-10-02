// 두 수의 합, 차, 곱, 나눗셈


// 합
function solution(num1, num2) {
    return num1 + num2;
}

// 차
function solution(num1, num2) {
    return num1 - num2;
}

// 곱
const solution = (num1, num2) => num1 * num2;

// 나눗셈 : 나눈 값에 x 1000, 정수 부분만 리턴
const solution = (num1, num2) => Math.floor((num1 / num2) * 1000);
