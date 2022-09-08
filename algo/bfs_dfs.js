// 그래프 순회 - BFS : 큐 구현
// BFS(너비 우선 탐색) : 인접한 노드들을 차례로 방문하여 순회
// e.g. 1번 노드는 2, 3번 노드와 연결(인접)된 모습을 표현
const graph = [[], [2,3],[1,7],[1,4,5],[3,5],[3,4],[7],[2,6]];
// 방문 확인 테이블(idx : node 번호, false로 초기화)
let visited = Array.from({length : graph.length}, () => false);

function bfs (graph, start, visited) {
    const queue = [];

    queue.push(start);
    visited[start] = true;
    while(queue.length !== 0) {
        const now = queue.shift();
        console.log(now);
        // 현재 노드와 인접한 노드들 확인
        for (const adj of graph[now]) {
            // 방문한 적이 없다면 > 큐에 삽입, 방문 처리
            if (!visited[adj]) {
                queue.push(adj);
                visited[adj] = true;
            }
        }
    }
}
bfs(graph, 1, visited);

// 그래프 순회 - DFS : 스택 / 재귀 함수 구현
// DFS(깊이 우선 탐색) : 깊은 부분(내려갈 수 있는 마지막까지)을 우선적으로 방문
function dfs (graph, start, visited) {
    const stack = [];
    
    stack.push(start);
    while (stack.length !== 0) {
        const now = queue.pop();

        if (visited[now]) continue;
        else visited[now] = true;
        console.log(now);

        // 현재 노드와 인접한 노드들을 역순으로 확인(LIFO)
        for (let i = graph[now].length -1; i >= 0; i--) {
            const adj = graph[now][i];

            if (!visited[adj]) {
                stack.push(adj);
            }
        }
    }
}

visited = visited.map(()=> false);
dfs(graph, 1, visited);