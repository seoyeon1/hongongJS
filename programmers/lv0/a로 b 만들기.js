// a로 b 만들기


function solution(before, after) {
    let b = [...before].sort().join('');
    let a = [...after].sort().join('');
    console.log(b, a);
    return (b == a) ? 1 : 0;
    
    // [다른 사람의 풀이]
    // 1. reduce & replace 공통문자를 공백으로 교체 > 길이 측정
    var solution=(a,b)=>![...a].reduce((t,i)=>t.replace(i,''),b).length*1;
    
    // 2. filter & includes, splice
    before = before.split('');
    after = after.split('');      
    after.filter(v => {         
        if (before.includes(v)) {
            before.splice(before.indexOf(v), 1); // before에서 공통문자 1개 제거
            return true;
        } else {
            return false;
        }
    })
    return before.length === 0 ? 1 : 0;
}