function solution(dirs) {
    var answer = 0;
    let direct = {
        U : 0,
        D : 1,
        L : 2,
        R : 3,
    };
    let path = [[0,0]];
    let now = [0, 0];
    let dx = [0, 0 , -1, 1];
    let dy = [1, -1, 0, 0];
    
    for(let i of dirs){
        let n = direct[i];
        let nx = now[0]+dx[n];
        let ny = now[1]+dy[n];
        if(nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
        else {
            now = [nx, ny];
            console.log(now);
            if(now in path) continue;
            else {
                path.push(now);
                // console.log(path);
                answer++;
            };
        };
            
    }
    return answer;
}