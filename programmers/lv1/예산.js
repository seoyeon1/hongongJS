function solution(d, budget) {
    var answer = 0;
    d = d.sort((a,b)=>(a-b)); // 신청금액이 적은 순으로 정렬
    for (let i = 0; i < d.length; i++) {
        if(budget >= d[i]) {
            budget -= d[i];
            answer++;
        }
        else
            return answer;
    }
    return answer;
}

// 다른 사람의 풀이 - reduce, pop으로 예산이 초과할 때마다 제거 > 구매가능한 부서만 남기기
// function solution(d, budget) {
    
//     d.sort((a, b) => a - b);

//     while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

//     return d.length;
// }

