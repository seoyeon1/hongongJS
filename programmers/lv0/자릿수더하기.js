// 자릿수 더하기


function solution(n) {
    var answer = 0;
    answer = [...(n+'')].map(v => +v).reduce((a,b)=> +a + +b);
    return answer;
}