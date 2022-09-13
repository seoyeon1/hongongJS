function solution(survey, choices) {
    var answer = '';
    let mbti = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    let score = [3, 2, 1, 0, 1, 2, 3];
    
    // 모든 질문에 대해 성격 점수 부여
    for (let i in survey) {
        if (choices[i] < 4) {
            mbti[survey[i][0]] += score[choices[i]-1];
            }
        else if(choices[i] > 4) {
            mbti[survey[i][1]] += score[choices[i]-1];
        }
    }
    // mbti 결정
    mbti.R >= mbti.T ? answer+='R' : answer+='T';
    mbti.C >= mbti.F ? answer+='C' : answer+='F';
    mbti.J >= mbti.M ? answer+='J' : answer+='M';
    mbti.A >= mbti.N ? answer+='A' : answer+='N';
    return answer;
}


// 다른 사람의 풀이
// function solution(survey, choices) {
//     const MBTI = {};
//     const types = ["RT","CF","JM","AN"];
//     // 지표 속 유형들을 mbti에 원소로 저장
//     types.forEach((type) =>
//         type.split('').forEach((char) => MBTI[char] = 0)
//     )
//     // 각 질문과 관련된 지표를 비동의, 동의로 나누고
//     choices.forEach((choice, index) => {
//         const [disagree, agree] = survey[index];
//         // 선택지값 중 4를 기준으로 삼항연산자를 써서 점수(절대값 이용)를 부과할 유형 선택 
//         MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
//     });
//     // map,join으로 최종 성격 유형을 결정
//     return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
// }