// 배열 돌리기


function solution(numbers, direction) {
    return direction === 'right'
      ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)] // right
      : [...numbers.slice(1), numbers[0]]; // left
  }