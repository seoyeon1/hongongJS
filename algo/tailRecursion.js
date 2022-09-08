// 팩토리얼 구현 - 재귀
function facto(n) {
    if (n === 1) return 1;
    return n * facto(n-1);
}

console.log(facto(10));


// 팩토리얼 구현 - 꼬리 재귀 : 중간 연산 필요X, 마지막 함수의 결과(최종 결과)만 반환
function facto_TR(n, total = 1) {
    if (n === 1) return total;

    return facto_TR(n - 1, total * n);
}

console.log(facto_TR(10));