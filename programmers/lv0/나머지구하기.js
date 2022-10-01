// 나머지 구하기 : % 연산자 이용


// 풀이1
function solution(num1, num2) {
    var answer = -1;
    answer = num1 % num2;
    return answer;
}

// 풀이2
function solution(num1, num2) {
    return  num1 % num2;
}

// 풀이3
const solution = (num1, num2) => num2 % num2;