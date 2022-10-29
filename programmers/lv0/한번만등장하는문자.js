function solution(s) {
    answer = ''
    let cnt = [...s].reduce((a, c)=> (a[c] ? {...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }), {});
    return Object.keys(cnt).filter(k=> cnt[k] === 1).sort((a, b)=> (a < b ? -1 : a > b ? 1 : 0)).join('');
}


// [다른 사람의 풀이] - indexOf & lastIndexOf 이용
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}