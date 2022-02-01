function solution(a, b) {
    var arr = [];
    
    for(let i = 0; i < a.length; i++){
        arr.push(a[i]*b[i]);
    }
    
    return arr.reduce((acc,cur) => acc+cur)
}