function solution(my_str, n) {
    let res = [];
    for (let i = 0; i < my_str.length / n; i++) 
        res = [...res, my_str.slice(i * n, i * n + n)]; // slice으로 길이 n만큼 잘라 새로 배열 생성
    return res;
  }