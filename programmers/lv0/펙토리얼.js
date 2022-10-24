function fecto(i){
    if(i === 1) return 1;
    else return i * fecto(i-1);
};

function solution(n) {
    var answer = 0;
    for (let i = 1; i < n; i++){
        if(n<fecto(i))
            return i-1;
        
    }
    // return ;
}

// [다른 사람의 풀이]
function solution(n) {
    let factorial = [1, 1];
    for (let i = 2; n > factorial[i - 1]; i++) factorial[i] = factorial[i - 1] * i;
    return factorial[factorial.length - 1] === n ? factorial.length - 1 : factorial.length - 2;
  }