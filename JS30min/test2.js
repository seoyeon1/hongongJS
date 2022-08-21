// object(객체) : key & value로 이뤄져 있음.

let a=1, b=2, c=3
let object = {a, b, c} // {x: 1, y: 2, z: 3} : 변수와 그 값을 객체의 키,값으로 사용

object['hello'] = 'world' // 수정, 추가 가능
object['hello'] = null  // delete로 삭제도 가능하지만 메모리상에 world가 남아있게 되므로 null 처리 권장

Object.keys(object)  // 해당 객체의 key만 출력 ['a', 'b', 'c', 'hello']
Object.values(object)  // 해당 객체의 value만 출력 [1, 2, 3, null]
Object.entries(object)  // 해당 객체 정보를 arr형태로 출력

// Map 객체 - 메서드 : set, get, has, delete, size
let map = new Map()
map.set('one', 100)  // 맵 객체에 key와 val를 추가
map.set('two', 200)
map.set('three', 300)
map.set('four', [10, 20])
map.set(5, [100, 200])
map.set([1, 2], [100, 200])
map.get(5)  // 맵의 키(5)를 이용해 해당 키의 값을 가져오기

let human = {
    name:'hojun3',
    age:30,
    local:'jeju'
}
// 기존 object를 map형태로 바꾸기 : 기존 오브젝트의 원소들을 가져와 새로운 객체 생성
let hojun = new Map(Object.entries(human)) // {'name' => 'hojun3', 'age' => 30, 'local' => 'jeju'}


// set : 중복 허락하지 않음

let ss = new Set('11112222444555521133')  // {'1', '2', '4', '5', '3'}

let set = new Set()
set.add(1);
set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.add(3);
set.add(3);
set.add(3);
set.size  // 3
// let set = new Set([1, 2, 3, 3, 3, 3])
// let set = new Set('helllllllllo')

let as = new Set([1, 2, 3])
let bs = new Set([3, 4, 5])
const 합집합 = new Set([...as, ...bs]);
const 교집합 = new Set([...as].filter(x => bs.has(x)));
const 차집합1 = new Set([...as].filter(x => !bs.has(x)));
const 차집합2 = new Set([...bs].filter(x => !as.has(x)));