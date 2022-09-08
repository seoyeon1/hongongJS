// 피보나치 수열 구현 - 재귀 함수 : 불필요한 반복 때문에 처리 속도가 느림
function fibo(n) {
    if (n === 1 | n === 2) return 1;
    return fibo(n-1) + fibo(n-2);
}

console.log(fibo(100));


// 피보나치 수열 구현 - DP (Memoization 기법 : 중복 호출 시, 메모리에 저장된 값을 리턴 > 성능 개선)
const M = Array.from({length : 1000}); // 메모리 : 계산한 결과를 저장해둘 데이터 집합

function fibo_M(n) {
    if (n === 1 | n === 2) return 1;
    // 이전에 호출한 적이 있다면, M에서 저장된 값을 리턴
    if (M[n]) return M[n];
    
    else { // 호출한 적이 없다면, n일 때의 피보나치 수열을 구해 M 저장 후 값 리턴
        
        M[n] = fibo_M(n-1) + fibo_M(n-2);
        return M[n];
    }
}

console.log(fibo_M(100));


// DP 예제 : 효율적으로 화폐 구성하기(최소한의 화폐(N 종류)로 M원 만들기)

const [n, m] = [2, 15]; // 여러 변수를 한 줄에 선언
const coins = [2, 3];

// 각 idx가 금액(M)을 뜻하도록 M+1만큼의 배열 생성, 정수 최댓값으로 초기화
const memo = Array.from( {length : m + 1}, ()=> Number.MAX_VALUE);

memo[0] = 0; // 0원 구성 > 화폐 필요X : 0

for (let i = 0; i < n; i++) {
    // 2원 ~ M원까지 각 동전으로 구성할 수 있다면 몇 개가 필요한지 계산, 기록
    for (let j = coins[i]; j <= M; j++) {
        // 기존 저장된 값과 비교 > 더 적은 개수로 만들 수 있다면 갱신  
        memo[j] = Math.min(memo[j], memo[j - coins[i]] + 1);
    }
}

log(memo[m]); // 5