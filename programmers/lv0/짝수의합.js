// 짝수의 합


function solution(n) {
    var answer = 0;
    while(n>0){
        if(n%2===0) answer+=n;
        n--;
    }
    return answer;
}