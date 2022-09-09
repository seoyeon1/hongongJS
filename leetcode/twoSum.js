// 타겟값을 만들 수 있는 두 수를 찾는 문제
// 단순히 큰 고민없이 이중for문을 사용(O(n^2))해서 해결했지만 아래 방법을 하면 연산 횟수를 줄일 수 있게 된다는 장점
// 공통적으로 타겟값과 현재 값의 차를 이용해 기존 숫자배열에 그 값이 있는지 확인, 없다면 객체에 추가, 있다면 리턴
function twoSum(nums, target) {
    let vals = {};

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in vals) {
  
        return [vals[target-nums[i]], i];
          }
         else {
     vals[nums[i]] = i;
       }
    }
   return [];
};

// Map() 사용
var twoSum = function(nums, target) {
  hashmap = new Map();
  for(i=0;i<nums.length;i++){
      if(hashmap.has(target-nums[i])){
          return [hashmap.get(target-nums[i]),i]
      }
      else{
          hashmap.set(nums[i],i)
      }
  }
  return [-1,-1]
};