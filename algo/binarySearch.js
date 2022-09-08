function binarySearch(arr, target, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
    else if (arr[mid] > target) return binarySearch(arr, target, start, mid -1); 
}

let arr = [1,2,3,4,5,6,7,8,9];

console.log(binarySearch(arr, 3, 0, arr.length -1));
