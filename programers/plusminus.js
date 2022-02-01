function solution(absolutes, signs) {
    var answer = [];
    
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i]) answer.push(absolutes[i])
        else answer.push(-absolutes[i])
    }
    
    return answer.reduce((acc,cur) => acc+cur);
}