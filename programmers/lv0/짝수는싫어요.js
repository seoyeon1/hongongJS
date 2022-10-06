// 짝수는 싫어요


function solution(n) {
    var answer = [];
    for(let i = 1; i <= n; i+=2){
        answer.push(i);
    }
    return answer;
    // [다른 사람의 풀이]
    return Array(n).fill(1).map((v,i)=>v+i).filter(v=>v%2===1);
}