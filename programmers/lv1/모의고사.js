function solution(answers) {
    var answer = [];

    var win = 0;
    var pattern = {
    '1' : [1,2,3,4,5],
    '2' : [2,1,2,3,2,4,2,5],
    '3' : [3,3,1,1,2,2,4,4,5,5]};
    
    for (let p in pattern){
        var cnt = 0;
        for(let i = 0; i < answers.length; i++){
            if (pattern[p][i % pattern[p].length] === answers[i]){
                cnt += 1;
            }

        }
        if (win < cnt) {
            if (answer.length !== 0){
                answer = [];
            }
            answer.push(Number(p));
            win = cnt;
        }
        else if (win === cnt) {
            answer.push(Number(p));
        }
        // 방법2) 각 사람마다 맞춘 개수를 카운트 > Math.max()
        // 필터로 값을 매칭해서 그 정답 개수(배열 길이) 구하기?
        // let winner = Math.max(...answer);
        // answer.filter((v)=> v==winner);

    }
    return answer;
}
