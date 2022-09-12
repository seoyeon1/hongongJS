function solution(arr) {
    var answer = [];
    if (arr.length <= 1)
        return [-1];
    else {
        let mini = Math.min(...arr);
        answer = arr.filter(v=> v !== mini);
        // 다른 사람의 풀이 - indexOf, splice 활용
        // arr.splice(arr.indexOf(Math.min(...arr)),1);
}
    
    return answer;
}