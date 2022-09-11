function solution(s){
    // const countP = [...s.matchAll(/p/gi)].length;
    // const countY = [...s.matchAll(/y/gi)].length;
    // return countP === countY;
    
    // ? 연산자로 예외처리 - 'p', 'y' 모두 하나도 없는 경우
    return s.match(/p/ig)?.length === s.match(/y/ig)?.length; 
    
    
}