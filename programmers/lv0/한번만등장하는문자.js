def solution(s) {
    answer = ''
    let cnt = [...s].reduce((a, c)=> (a[c] ? {...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }), {});
    return Object.keys(cnt).filter(k=> cnt[k] === 1).sort((a, b)=> (a < b ? -1 : a > b ? 1 : 0)).join('');
}