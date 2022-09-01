// 배열의 0번째 인덱스, 47번째 인덱스, 23번째 인덱스 순서대로 이어 붙여 단어를 만들고 solution 함수 안에서 return 해보세요
function solution(hangul) {
    
    return hangul[0] + hangul[47] + hangul[23];
  }
// 문자열 자르기
  function solution(str) {
    var answer = [];
    var s = str.split(' ');
    answer.push(typeof s);
    answer.push(s[0]);
  
    return answer;
  }
// N줄에 걸쳐 입력 받는 프로그램
  function solution(input) {
    var answer = input.split('\n');
    
    return answer;
  }
// 엘리스 토끼가 가진 돈에 따라서 이용할 수 있는 가장 비싼 교통수단
  function solution(money) {
    var answer;
  
    if ( money >= 1000 ) {
      answer = "택시";
    } else if ( money >= 500 ) {
      answer = "버스";
    } else if ( money >= 300 ) {
      answer = "지하철";
    } else {
      answer = "도보";
    }
  
    return answer;
  }
// 엘리스를 도와 암호를 걸러내는 프로그램을 논리 연산자(and, or) 와 관계 연산자(>, <, <=, …) 를 이용해서 문제를 해결해보세요.
  function solution(input) {
    var answer;
  
    var number = input.split(" ")
    var a = number[0];
    var b = number[1];
    var c = number[2];
    var d = number[3];
    answer = (a <= b && a == d && b > c && c < 6) || (a == b && a == c && a == d);
  
    return answer;
  }

// 노동요
  
function solution(s) {
    var answer = "";
  
    for (var i = 0; i < s.length; i++) {
      if (s[i] == " ") {
        answer += "링디기디기\n";
      } else if (s[i] == ".") {
        answer += "딩딩딩\n";
      } else {
        answer += "링딩동 ";
      }
    }
  
    return answer;
  }
// 숫자를 입력하면 1부터 해당 숫자까지 배열에 담는 코드를 작성해봅시다. 
  function solution(num) {
    var answer = [];
  
    for (let i = 1; i <= num; i++) {
      answer.push(i);
    }
  
    return answer;
  }

// 소수의 합 구하기
  function solution() {
    var answer = 0;
    
    for (var i = 1; i <= 200; i++) {
      for (var j = 2; j <= i; j++) {
          if (i % j == 0) {
              break;
          }
      }
      if (i == j) {
          answer += i
      }
    }
  
    return answer; 
  }
// 어떤 한 수를 입력받았을 때, 해당 수의 약수들을 출력하는 코드를 짜봅시다.
  function solution(input) {
    var answer = [];
    for (let i = 1; i <= input; i++) {
      if (input % i === 0) {
        answer.push(i);
      }
    }
    return answer;
  }

  // 2차원으로 되어있는 배열을 1차원 배열로 만들어 봅시다!

  function solution(arr) {
    var answer = [];
  
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            answer.push(arr[i][j]);
        }
    }
  
    return answer;
  }
  
  function solution(arr) {
    var answer;
  
    answer = arr.flat();
  
    return answer;
  }
  
  