//const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31] 이렇게 미리 month 배열 만들어둬도 됨

function solution(a, b) {
    var answer = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    let total = b;
    for (let i = 1; i < a; i++) {
        if (i === 2) 
            total += 29; // 윤년 : 2/29 존재
        else 
            [1, 3, 5, 7, 8, 10, 12].includes(i) ? total += 31 : total += 30;
    }
    
    return answer[total % 7];
}