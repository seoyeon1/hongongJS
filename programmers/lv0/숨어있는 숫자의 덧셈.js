// 숨어있는 숫자의 덧셈(1)


function solution(my_string) {
    // 숫자만 필터링 > reduce (정수 변환 후) 합 계산
    var answer = my_string.split('').filter(v=> !isNaN(v)).reduce((prev, curr)=> prev+(+curr), 0);
    return answer;
    
    // [다른 사람의 풀이] replaceAll(regex:숫자가아닌모든문자)
    return my_string.replaceAll(/[^\d]/g, '').split('').map(v=>+v).reduce((a,v)=>a+v,0); 
}