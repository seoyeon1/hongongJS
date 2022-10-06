// 특정 문자 제거하기


function solution(my_string, letter) {
    var regexp = new RegExp(letter, "g"); // 정규식 안에 변수를 사용하기 위해
    return my_string.replace(regexp, '');
    
    // [다른 사람의 풀이] split & join
    return my_string.split(letter).join('')
}