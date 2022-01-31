function solution(s) {
    var nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    while(isNaN(s)){
        for(let i = 0; i < nums.length; i++){
            if(s.indexOf(nums[i]) !== -1){
            s = s.replace(`${nums[i]}`, nums.indexOf(nums[i]))
            }
        }
    }
    return Number(s)
}