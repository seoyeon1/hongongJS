// 외계행성의 나이
// 숫자를 문자로 > 아스키 코드값 & 각 숫자와 0의 차이를 이용


function solution(age) {
    var answer = '';
    for(let i of age+''){
        answer += String.fromCharCode(97+(i-0)); // 아스키 > 문자로
    }
    
    return answer;


    // [다른 사람의 풀이] 영문자 문자열 선언 & map
    let char = 'abcdefghij'
    return Array.from(age.toString()).map(t => char[+t]).join('');
}