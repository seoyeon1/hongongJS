function solution(arr)
{
    var q = [];
    q.push(arr[0]);
    
    
    for(let i = 1; i < arr.length; i++){
        if(q[q.length -1] === arr[i])
        // if(q.at(-1) === arr[i]) // Array.at(-1) : 배열의 마지막 요소에 접근 (시간초과)
            continue;
        else
            q.push(arr[i]);
    }
    
    return q;
}

// 다른 사람의 풀이 - filter 사용> 다음 인덱스 값과 비교
// return arr.filter((val,index) => val != arr[index+1]);