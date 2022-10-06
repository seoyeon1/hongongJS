// 모음 제거


function solution(my_string) {
    var erase = ['a','e','i','o','u'];
    return [...my_string].filter(v=> !erase.includes(v)).join('');
    
    // [다른 사람의 풀이] regex
    return my_string.replace(/[aeiou]/g, '');
}