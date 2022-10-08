// 가위 바위 보


function solution(rsp) {
    var answer = ''; // rsp 이기는 순서
    for(let i of rsp){ // 3항 연산자 중첩
        answer += i === '2' ? '0' : (i === '0' ? '5' : '2'); 
    }
    
    // [다른 사람의 풀이] - 승리 조합을 객체 k:v로 저장
    
    var win = {
        2 : 0,
        0 : 5,
        5 : 2
    };
    
    // answer += [...rsp].map(v=>win[v]).join('');
    return answer;
}