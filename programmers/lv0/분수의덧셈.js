// 분수의 덧셈


function solution(denum1, num1, denum2, num2) {
    var answer = []; // 분수의 덧셈 결과
    let denum = denum1 * num2 + denum2 * num1; // 분자
    let num = num1 * num2; // 분모
    // 약분 > 최대공약수 필요
    let gcd = (a, b)=> a % b === 0 ? b : gcd(b, a % b);
    let div = gcd(denum, num);
    answer = [denum/div, num/div];
    
    return answer;
}

// [다른 사람의 풀이] 최대공약수-while문
function gcd(a, b) {
    while (b !== 0){
        let r = a % b
        a = b
        b = r
    }
    return a
}