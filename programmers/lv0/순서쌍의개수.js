// 순서쌍의 개수 : 약수의 개수 문제와 유사
// (x1, x2) != (x2, x1)이기 때문에, 
// 제곱근n이하 정수 약수를 기준으로 순서쌍 대칭 > 제곱근까지만 반복해도 됨


function solution(n) {
    var answer = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){ // 제곱근 이하 정수까지만 약수 확인
        if(n % i === 0) answer++;
    }
    // 순서쌍 개수 : 제곱근 값이 정수인지
    Math.sqrt(n)%1===0 ? answer = answer*2 -1 : answer *= 2; // 정수 판별 : Number.isInteger()
    return answer;
}