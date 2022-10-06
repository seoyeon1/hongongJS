// 대문자와 소문자


function solution(my_string) {
    let answer = [...my_string].map(v=>{
        if(v === v.toUpperCase()) return v.toLowerCase(); 
        else return v.toUpperCase();}).join('');
    
    return answer;
    
    // [다른 사람의 풀이] 3항 연산자
    return my_string.split('').map(
        n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('');
    
}