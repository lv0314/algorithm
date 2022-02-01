function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length-1; i++){
        for(let j = i+1; j < numbers.length; j++){
            var num = numbers[i]+numbers[j]
            if(answer.indexOf(num) === -1){
                answer.push(num)
            }
        }
    }
    answer.sort((a,b) => a-b);
    
    return answer
}