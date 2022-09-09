// 각 자리수에 대한 곱 - 합 문제
// reduce()에 적응이 되어가는 중 + 언패킹
// 선언식 형태보단 화살표함수가 코드가 간결해서 더 좋고 편해졌다
// 이번에 한번에 통과, 전체의 80%보다 빠르고 메모리를 적게 사용했다니!!
var subtractProductAndSum = function(n) {
    let mul = [...(n+"")].reduce((mul, curr)=> mul * parseInt(curr), 1);
    let add = [...(n+"")].reduce((sum, curr)=> sum + parseInt(curr), 0);
    return mul - add;
};

// 타입 변환 : 숫자 > 문자 > 배열 > 숫자배열
// split() 방법이 기억안나서 나는 이렇게([...(n+"")]) 숫자 > 배열타입으로 만들었는데 아래 Array.from도 가능하구나 
var subtractProductAndSum = function(n) {
    const digits = Array.from(String(n), Number) // String(n).split('') 같은 의미
    const sum = digits.reduce((a,b) => a+b)
    const product = digits.reduce((a,b) => a*b)
    return product-sum
};