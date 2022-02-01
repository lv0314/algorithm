function solution(numbers) {
    var answer = 45;
    
    var minus = numbers.reduce((acc,cur) => acc+cur)
    
    return answer-minus;
}