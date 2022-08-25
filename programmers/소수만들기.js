function solution(nums) {
    var cnt = 0;
    
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            for (let k = j+1; k < nums.length; k++){
                var sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) {
                    cnt++;
                }
            }
        }
    }
    
    function isPrime(n) {
        if (n === 2) {
            return true;
        }
        for(var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    
    return cnt;
}