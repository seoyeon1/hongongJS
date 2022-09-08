// 퀵 정렬 구현 > 분할 정복 방식
function quickSort(arr) {
    if(arr.length <= 1) return arr;
    // 기준(pivot) 설정
    const pivot = arr[0];

    // 기준보다 작은 값은 왼쪽 배열에, 큰 값은 오른쪽 배열에 두기
    const left = arr.filter((item) => item < pivot);
    const right = arr.filter((item) => item > pivot);

    // 분할한 배열들도 더 이상 분할할 수 없을 때까지 재귀 호출, 정렬
    // concat()으로 배열들을 병합 > 하나의 배열
    return quickSort(left).concat([pivot], quickSort(right));
}

let arr = [3,5,1,7,4,2];

console.log(quickSort(arr)); // [1, 2, 3, 4, 5, 7]