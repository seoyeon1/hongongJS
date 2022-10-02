// 배열의 평균값
// 평균 = 배열 원소의 합(reduce()) / 배열의 길이


// 풀이1
function solution(numbers) {
    var answer = 0;
    answer = (numbers.reduce((a,b) => a+b, 0))/numbers.length;
    return answer;
}

// 풀이2 : for문
function solution(numbers) {
    var answer = 0;
    for(let i of numbers){
        answer+=i;
    }
    return answer/numbers.length;
}