// 배열 함수(sort, shift, pop, reduce) 활용
// 어떻게든 배열 함수들에 익숙해지려고 쉬운 길도 돌아가는 풀이 
// JS 초보 티 난다. 그래서 통과했지만 런타임이 하위 10% ㅋㅋㅋㅋㅋ
let sum = 0;
var average = function(salary) {
    salary = salary.sort((a, b)=> a-b); // ascending
    salary.shift();
    salary.pop();
    const avg = salary.reduce((sum, curr) => sum + curr, 0);
    return avg/salary.length;
};

// 최대, 최소를 제외한 나머지 임금의 평균을 구하는 문제
const average = salary => {
    
    let max = Math.max(...salary) // 배열을 풀어서 max, min을 찾고
    let min = Math.min(...salary)
    let sum = salary.reduce((a,b) => a + b) // 배열의 합 계산
    
    sum -= max // 합에서 최대,최소값 제거
    sum -= min
    
    return sum / (salary.length - 2)
   
};

let k = salary.length - 1;
    
    salary = salary.sort((a, b) => (a > b) ? 1 : -1); // 오름차순
    salary = salary.slice(1, k); // min,max값 제외 > slice로 배열 자르기
    let total = salary.reduce((a, b) => a + b, 0); //reduce로 부분 배열의 합 계산
    return total / salary.length;