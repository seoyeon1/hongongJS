// 이진수 더하기
// parseInt(값, n) : n진수인 값을 10진수로 변환
// toString(n) : 10진수를 n진수 값으로 변환 


function solution(bin1, bin2) {
    var answer = (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
    return answer;
}