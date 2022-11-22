// 구슬 나누는 경우의 수


function solution(balls, share) { //조합 : bCs
    var answer = 0;
    const fact = v=>  // 경우의 수 체크

    // tada( (arr) => {
    //     arr.filter(v=> v===1).length === share ? return True : return False
    // });
    function dfs(n, r){
    if(tata(c)) {
        answer+=1;}
    }
    else{
        return dfs(n-1, r-1)+dfs(n-1,r);
    }
    
    
    return answer;
}


// [다른 사람의 풀이] - BigInt 사용
function solution(balls, share) {
    const [n, m] = [balls, share];
    const fact = [BigInt(1), BigInt(1)];
  
    for (let i = 2; i <= n; i++) fact[i] = fact[i - 1] * BigInt(i);
  
    return Number(fact[n] / (fact[n - m] * fact[m]));
  }