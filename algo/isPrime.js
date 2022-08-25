// 방법1 : for문으로 소수 2부터 num까지 반복
function isPrime(num) {
    if (num === 2) {
        return true;
    }
    for (let i = 2; i < num; i++) {  
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


// 방법2 : num의 절반만 비교
function isPrime2(num) {
    if (num === 2) {
        return true;
    }
    for (let i = 2; i <= num/2; i++) {  
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


// 방법3 : Math.sqrt() : 제곱근 함수 이용. 시간복잡도(min)
// num의 제곱근보다 작은 수에서 나눠지는 수가 나오지 x > 보다 큰 수에서도 나올 수 X : 제곱근까지만 비교해도 판별 가능
function isPrime3(num) {
    if (num === 2) {
        return true;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {  // Math.floor() : 내림, .round() : 반올림, .ceil() : 올림
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


// 소수찾기 - 에라토스테네스 체 구현
function solution(nums) {
    var answer = -1;
    // 1. 기준 배열 만들기 : (n 포함해야) 크기가 n+1인 배열 생성, true로 채우기(0,1은 소수에서 제외:false)
    let arr = Array(nums+1).fill(true).fill(false, 0, 2);
    // 소수의 배수들 제외하기
    for (let i = 2; i * i < nums; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= nums; j++) {
                arr[j] =false;
            }
        }
    }
    
    return arr;
}

let isPrimes = solution(100);

// 소수의 개수
isPrimes.filter(e => e).length; // 25

// 소수 반환
isPrimes.map((v, i) => (v) ? i : 0).filter(e => e);
