// 최빈값 구하기


function solution(array) {
    let tmp = {}
    var answer = 0;
    for(let v of array){
        tmp[v] ? tmp[v] += 1 : tmp[v] = 1;
    }
    // console.log(tmp);
    let M = Math.max(...Object.values(tmp));
    // console.log(M);
    answer = Object.keys(tmp).filter((v)=> tmp[v] === M);
    // console.log(answer);
    answer = answer.length === 1 ? answer[0]*1 : -1;
    return answer;
}

// [다른 사람의 풀이] - Map객체, reduce
function solution(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}

const solution = (array) => {
    const counter = array.reduce((acc, cur) => ({
        ...acc,
        [cur]: (acc[cur] || 0) + 1
    }), {})

    const items = Object.keys(counter).map((key) => [
        Number(key), counter[key]
    ]).sort((a, b) => b[1] - a[1])

    if (items[0][1] === items?.[1]?.[1]) {
        return -1
    }

    return items[0][0];
}