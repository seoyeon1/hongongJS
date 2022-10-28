// k의 개수


function solution(i, j, k) {
    var answer = 0;
    k = k+'';
    for (let s = i; s <= j; s++){
        s = s+'';
        if(s.includes(k)) {
            answer += [...s].filter( v => v==k).length;
        }
    }
    // console.log(answer);
    return answer;
}