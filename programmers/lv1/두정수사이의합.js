function solution(a, b) {
    var answer = 0;
    console.log(a, b)
    if (a > b){
        for (let i = b; i <= a; i++)
        answer += i;
    }
    else {
    for (let i = a; i <= b; i++)
        answer += i;}
    return answer;
}

// 다른 사람의 풀이 - 비교할 값이 2개 뿐이니까 Math의 메소드를 활용 > 대소 판단
// function adder(a, b, s = 0){
//   for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
//   return s;
// }