function divide(N) {
    var cnt = 0;
    for (var j = 1; j <= N; j++) {
        if(N % j == 0) {
            cnt++;
        }
    }
    if(cnt % 2 != 0) {
        return N * -1;
    }
    return N;
}
function solution(left, right) {
    var answer = 0;
    
    for (var i = left; i <= right; i++) {
        answer += divide(i);
    }
    return answer;
}

// 제곱근이 정수 > 약수의 개수는 홀수..!!!!
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}