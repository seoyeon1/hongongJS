// 개미 군단


function solution(hp) {
    let k = ~~(hp / 5); // ~~ 연산자 : 나눗셈 연산 후 소수점 이하 버림
    let q = ~~((hp - k*5) / 3);
    let j = hp - k*5 - q*3;
    
    return k+q+j;
    
    
    // [다른 사람의 풀이] - parseInt & %
    return parseInt(hp/5) + parseInt((hp%5)/3) + parseInt((hp%5)%3);
}