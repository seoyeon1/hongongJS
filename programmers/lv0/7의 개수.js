// 7의 개수
// 원소들을 하나의 문자열로 합친 후, 7의 개수 카운팅


function solution(array) {
    return [...array.join('')].filter(v=> v === '7').length;

    // [다른 사람의 풀이] - reduce() 7 카운팅
    return array.join("").split("").reduce((acc,v)=>{
        if(v === '7') acc++; // 
        return acc
    }, 0);

}