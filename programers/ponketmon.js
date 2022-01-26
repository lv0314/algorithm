function solution(nums) {
    var N = nums.length /2;
    var answer = new Set();
    for(var i = 0; i < nums.length; i++){
        answer.add(nums[i])
    }
    
    if(answer.size > N){
        return N;
    } else {
        return answer.size;
    }
}