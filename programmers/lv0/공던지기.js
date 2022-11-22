function solution(numbers, k) {
    const Next = cur => (cur + 2) % numbers.length;
    let cur = 0;
    for (let i = 0; i < k - 1; i++) cur = Next(cur);
    return numbers[cur];
}