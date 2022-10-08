// 주사위의 개수


function solution(box, n) { //[가로, 세로, 높이], 주사위 한 모서리 길이

    let bottom = ~~(box[0]/n) * ~~(box[1]/n); // 1층에 들어갈 수 있는 주사위 수 
    let h = ~~(box[2]/n);
    return bottom * h;
    
    
    // [다른 사람의 풀이] - map, reduce
    return box.map(v=>~~(v/n)).reduce((a,v)=>a*v,1);
    
    return box.reduce((a, b) => [...a, parseInt(b / n)], []).reduce((acc, cur) => acc * cur, 1);
}