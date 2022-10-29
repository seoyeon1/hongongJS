// 영어가 싫어요


function solution(numbers) {
    const nums = { // 영어단어에 대응하는 숫자를 객체로 저장
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5, 
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9,
        zero : 0,
    };
    // match로 각 영어숫자단어를 원소로 하는 배열 생성 > 객체 정보를 이용, 숫자로 교체 > join + 숫자형 변환
    let answer = numbers.match(/one|two|three|four|five|six|seven|eight|nine|zero/g).map(v=> nums[v]).join('')*1;
    return answer;
}


// [다른 사람의 풀이] - Regex
function solution(numbers) {
    const nums = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
    const regex = new RegExp(Object.keys(nums).join('|'), 'g');
    return +numbers.replace(regex, key => nums[key]);
  }