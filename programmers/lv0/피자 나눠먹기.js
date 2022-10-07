// 피자 나눠먹기(1)


function solution(n) {
    // var answer = n % 7 === 0 ? n / 7 : Math.floor(n / 7) + 1;
    // 다른 사람의 풀이
    var answer = Math.ceil(n / 7); // 소수점을 올림해버리면 필요한 피자 판의 개수 해결
    return answer;
}

// 피자 나눠먹기(2)
// 피자가 남기지 않기 위해 필요한 최소 피자 판


function solution(n) {
    // [나의 풀이] 1 - 최대공약수 
    let gcd = 1; // 최대공약수
    if(n % 6 === 0) return n/6;
    else{
        for(let i = 2; i <= Math.min(n, 6); i++){ // gcd 찾기
            if(n % i === 0 && 6 % i === 0) gcd = i;
        }
        return n / gcd; 
    };
    
    // 2 - while
    let pizza = 6;
    while(true) { // 피자가 남지 않을 때까지 피자 1판씩 추가
        if (pizza % n === 0) {
            break
        }
        pizza += 6
    }
    return pizza/6;


    // [다른 사람의 풀이]
    let count = 1;
    while (!Number.isInteger(count*6/n)) count++;
    return count;
}

// 피자 나눠먹기(3)
// n명이 최소 1조각을 가질 수 있게 최소 피자판 확보


function solution(slice, n) {
    return Math.ceil(n/slice); // 소수점 올림
}