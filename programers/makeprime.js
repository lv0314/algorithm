function solution(nums) {
    let answer = 0;
    const length = nums.length;

    for(let i = 0; i < length-2; i++){
        for(let j = i + 1; j < length-1; j++){
            for(let k = j + 1; k < length; k++){
                if(isPrime(nums[i]+nums[j]+nums[k])) answer++;
            }
        }
    }

    return answer;
}

function isPrime(num) {
    if(num < 2) return false;
    if(num === 2 || num === 5) return true;
    if(num % 2 === 0) return false;
    if(num % 5 === 0) return false;

    for(let i = 2; num > i; i++){
        if(num % i === 0) return false;
    }

    return true;
}