function solution(absolutes, signs) {
    var answer = 0;
    absolutes.forEach((n, idx) => {
        if(!signs[idx]) {
            n *= -1;
        }
        answer += n;
    })
    
    return answer;
}

// reduce() 사용
//https://github.com/codeisneverodd/programmers-coding-test

function solution(absolutes, signs) {
    return absolutes.reduce(
      (acc, curr, i) => acc + curr * (signs[i] ? 1 : -1),
      0
    );
  }