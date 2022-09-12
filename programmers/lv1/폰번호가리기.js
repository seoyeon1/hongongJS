function solution(p_num) {
    // for (let i = 0; i < p_num.length - 4; i++)
    //     p_num = p_num.replace(p_num[i], '*')
    // 다른 사람의 풀이
    p_num = '*'.repeat(p_num.length - 4) + p_num.slice(-4);
    return p_num;
}