// 여러 줄로 출력
function solution() {

    return "400\nbus\nlike" ;
  }

// 따옴표 출력  
function solution() {

    return '"It\'s all right."';;
}
 
function solution() {

    var num = 400;
    var str1 = "bus";
    var str2 = "like";
  
    return num + " " + str1 + " " + str2;
  }

  function solution(num, string) {

    num += 204;
    string += "elice!";
  
    return { num, string }; 
  }

  function solution() {
    var num1 = 1;
    var num2 = 2;
  
    var str1 = "1";
    var str2 = "2";
  
    return [num1 + num2, str1 + str2];
  }

  function solution() {

    // 한식 가격
    var korean = 7000;
  
    // 중식 가격
    var chinese = 6000;
  
    // 양식 가격
    var western = 8500;
  
    // 할인된 한식의 가격
    var discount_korean = korean - korean * 0.1;
  
    var total_price = discount_korean * 55 + chinese * 43 + western * 52;
  
    return { korean, chinese, western, discount_korean, total_price };
  }

  function solution() {

    var a = 10;
    var b = 10;
  
    var case1 = (a == b);
    var case2 = (a === b);
  
    b = "10";
  
    var case3 = (a == b);
    var case4 = (a === b);
  
  
    return { case1, case2, case3, case4 }; 
  }

  function solution(num1, num2) {
    let answer = [];
  
    answer.push(Math.floor(num1 / num2));
    answer.push(num1 % num2);
  
    return answer;
  }

  function solution() {
    function add(x, y) {
      return x + y;
    }
    return add;
  }