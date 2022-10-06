// 가장 큰 수 찾기


function solution(array) {
    var answer = [0, 0];
    array.forEach((v,i)=>{
        if (v > answer[0]){
            answer = [v, i];
        }
    });
    return answer;
    
    // [다른 사람의 풀이] Math.max & indexOf
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
    
}