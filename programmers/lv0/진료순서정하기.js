// 진료 순서 정하기


function solution(emergency) {
    // 기존 배열의 순서가 바뀌지 않게 복사해서 사용 > emergency.slice() 가능
    let tmp = [...emergency].sort((a,b)=> b-a); 
    var answer = emergency.map(v=> tmp.indexOf(v)+1);
    return answer;
}