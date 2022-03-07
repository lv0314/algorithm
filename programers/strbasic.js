function solution(s) {
    let answer = true;
    const arr = s.split('');
    
    if(arr.length !== 4 && arr.length !== 6) answer = false;
    
    arr.forEach(v => {
        if(isNaN(v)) {
            answer = false
            return;
        };
    })
    
    return answer;
}