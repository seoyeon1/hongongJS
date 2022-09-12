function solution(numbers) {
    var answer = [];
    // 모든 경우의 수를 구하고 오름차순 정렬
    for(let v = 0; v < numbers.length; v++){
        for(let j = v+1; j < numbers.length; j++){
            var c = numbers[v] + numbers[j];
            if (!answer.includes(c))
                answer.push(c);
            
        }
        // 다른 사람의 풀이 : new Set()으로 중복값 제거
        // const answer = [...new Set(temp)]
    }
    return answer.sort((a, b) => a - b);
}