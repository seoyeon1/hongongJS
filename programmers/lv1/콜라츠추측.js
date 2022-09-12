function solution(num) {
    let cnt = 0;    
    while (cnt < 500){
        if (num === 1) return cnt;
        num % 2 === 0 ? num /= 2 : num = num *3 + 1;
        cnt++;
        }
    
    return -1;
}

// 다른 사람의 풀이
// const solution = (num) => collatzGuessCount(num, 0);

// const collatzGuessCount = (num, acc) => 
//   (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);

// const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);