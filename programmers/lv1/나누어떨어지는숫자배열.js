function solution(arr, divisor) {
    var answer = []; 
    
    for (let i of arr){
        if (i % divisor === 0)
            answer.push(i);
    }
    if (answer.length === 0) return [-1];
    else return answer.sort((a, b)=> (a-b));
}

// 다른 사람의 풀이 : filter와 삼항 연산자 사용

    // var answer = arr.filter(v => v%divisor == 0);
    // return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);