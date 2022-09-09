
// @param {ListNode} l1
// @param {ListNode} l2
// @return {ListNode}

// 역순으로 저장된 연결리스트 2개 > 차례대로 값 접근(=1의자리부터 차례대로 계산)
// 자릿수 덧셈 > 캐리 발생 > 다음 자릿수 덧셈에 캐리까지 더해 계산 : 노드 끝까지 반복

var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let head = result;
    let carry = 0;
    let sum =0;
    
    while (l1 || l2 || sum > 0) {
        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }
        

        if (sum >= 10) {
            carry = Math.floor(sum / 10); // 1
            sum = sum - 10;
        }
        head.next = new ListNode(sum); // 자릿수 덧셈 결과를 결과 리스트에 추가
        head = head.next;
        
        sum = carry;
        carry = 0;
    }
    return result.next;

};


