function solution(participant, completion) {
    // 배열의 원소들이 문자이기 때문에 바로 정렬(알파벳순) 후, 인덱스로 비교하기
    part = participant.sort();
    finish = completion.sort();
    
    for (let i = 0; i < finish.length; i++) {
        if (part[i] !== finish[i])
            return part[i];
    }
    return part[part.length - 1];
    
}

// 다른 사람의 풀이 - 해시를 사용한 풀이(해시 공부하고 다시 풀어보자)
// function solution(participant, completion) {
//     const map = new Map();

//     for(let i = 0; i < participant.length; i++) {
//         let a = participant[i], 
//             b = completion[i];

//         map.set(a, (map.get(a) || 0) + 1);
//         map.set(b, (map.get(b) || 0) - 1);
//     }

//     for(let [k, v] of map) {
//         if(v > 0) return k;
//     }

//     return 'nothing';
// }