document.getElementById('one').innerHTML = "hi JS!!!!!"
console.log("log checked")

let x = 10
let y = 20
console.log(x + y)

// 블록레벨 스코프 : 중괄호 안에 선언된 const, let은 괄호 밖에서 사용 불가
if (true) {
    const testName = "sym"
    let testAge = 10
}


// document에서 찾은 값(요소)을 변수로 사용할 때 그 앞에 $표시를 붙이기도 함
const $one = document.getElementById('one')
$one.innerHTML = "so whattttt"

for (let x = 1; x < 101; x++){
    if (x % 3 ==0 && x % 5 == 0){ // && : 둘 다 참. 3의 배수이면서 5의 배수일 때 출력
        console.log(x)
    }
}

console.log(!true) // false
console.log(!!true) // true
// !! : 어떠한 것의 t/f를 판별할 때 사용
console.log(!!0) // false
console.log(!!'') // false
console.log(!!"hello") // true

// 비교 연산자 활용 > 단락 회로 평가 : 앞에 값이 널인지 확인하고 싶을 때 사용
user1 = 'chimm'
res1 = user1 || 'no user name'

user2 = undefined
res2 = user2 || 'no user name'
console.log(res1)
console.log(res2)

// == : JS에서는 타입이 달라도 값만 같으면 true
let xx = 1
let yy = '1'
console.log(xx == yy)
console.log(xx === yy) // false : ===는 값 & 타입 모두 같아야 true
console.log(xx !== yy) // true 

// nullish 병합 연산자(??) : 단락 회로 평가에 사용. 앞에 값이 f이면 뒤에 값을 변수에 넣어줌
let res3 = user1 ?? 'no user name'
let res4 = user2 ?? 'no user name'
console.log(res3)
console.log(res4)

typeof 10 // 'number'
typeof '10' //'string'

// 프로퍼티 접근 연산자 : . , []
let o = {'one':1, 'two':2}
console.log(o.one)
console.log(o['one'])

// 관계 연산자(in) : key만 가지고 판단

console.log(10 in [10, 20, 30]) // false : 여기에서 key는 인덱스. 배열 요소들의 인덱스 번호 0, 1, 2이 키에 해당
console.log(1 in [10, 20, 30]) // true
// 'h' in 'hello' 같은 경우, err발생.(python같은 경우, true)

let x_in = [10, 20, 30]  // 배열
console.dir(x_in)  // .dir : 매개변수에 모든 속성을 알려줌
console.log("length" in x_in) // true. 배열 타입은 length 속성이 존재. 키값으로 'length'가 있으니까 true
console.log("length" in o) // false. o는 Object 타입이며 length 속성이 존재하지 않음

// 변수 타입
// 원시 타입 경우 : number, string, boolean, null, undefined, symbol
let v = 'hello'
console.log(v[0]) // h. 변수 명을 사용해서 호출은 가능하지만 (변수명 없이)바로 호출은 불가
v[0] = 'j'
console.log(v) // hello. 값 변경은 불가능

// 참조 타입의 경우 : function, object(object, array, map, set)
x_in[1] = 15
console.log(x_in) // 값을 변경도 가능


// 1. 숫자 : 정수, NaN, infinity, -infinity 
let n = 10

// '10' 숫자를 문자로 변환
n.toString() 
n.toString() + n.toString() //'1010'

n = 10.323
n.toFixed() // "10" 입력한 자리수 만큼 소수점 이하만 남기고 버림
n.toFixed(1) // '10.3'

// 문자를 숫자로
Number('10') 
parseInt('10') // 10. 이 방식을 권장
parseInt('1hello') // 1
Number('1hello')  // NaN


// 문자열
let s = 'abcde' // "abcde", `abcde`, `abcde${변수명}` 도 사용 가능

let nam = 'seoyeon'
let age = 10
console.log(`my name is ${nam}. and I'm ${age} years old.`)
console.log(nam.length)  // 7
console.log(nam[0])  // 's'
console.log(nam.slice(3,)) // 'yeon' 3번째부터 끝까지 잘라내기
console.log('hello JS'.slice(0, 5)) // 'hello' 0번째부터 5번째 인덱스 전까지 잘라내기
console.log('hello JS'.replace('JS', 'react!')) // 교체하기
console.log('hello JS, hi JS'.replace(/JS/g, 'react!')) // hello react!, hi react!. 교체하기 + 정규표현식 사용 : 모든 JS를 react!로 교체하기
let arr = '0'.repeat(10).split('') // 10개의 0으로 이뤄진 객체(배열) 생성


// Boolean (논리값) : true, false
let t = true

!![] // true (빈 괄호가 다른 언어에서는 false라고 판단하기도 함)
!!{} // true
!!'' // false
!!'hi' // true (글자가 하나라도 있다면 true)
!!0 // false
!!10 // true (0을 제외한 숫자는 다 true)


// undefined : 값을 아무것도 할당하지 않았을 때
let un // undefined

un = null // 값이 없음을 명시
un // null


// Array(배열) : 배열도 객체(object)다
let arr1 = [{'one':1, 'two':2}, {'one':11, 'two':22}]
arr[0]  // {one: 1, two: 2}
arr1[0]['one'] // 1

arr = [10, 20, 30, 40]
arr.length // 4

arr.forEach(arr => console.log(arr ** 2))  // 순회를 돌면서 arr의 모든 원소에 명령(제곱하기) 적용

arr.map(arr => arr + 100) // [110, 120, 130, 140] (함수를 적용한) 새로운 객체 생성 
// 많은 양의 데이터에서 원하는 정보만 뽑아와서 사용하고 싶을 때 사용

arr.filter(arr => arr > 20) // [30, 40] 주어진 데이터에서 특정 조건이 true인 값들만 가져오고 싶을 때

arr.find(arr => arr > 20) // 30. 조건에 참인 값 1개만 찾아옴

// 1~100까지 채워진 배열 생성 : 길이가 100개인 빈 배열생성>0으로 채우고> map과 이 배열의 val, idx를 활용해 1~100을 원소로 갖는 새로운 배열 생성
onetohund = Array(100).fill(0).map((value, index) => value + index + 1)
