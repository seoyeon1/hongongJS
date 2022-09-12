function solution(n) {
    let nn = Math.sqrt(n);
    if (nn === parseInt(nn))
        return (nn+1)**2;
    else
        return -1;
}