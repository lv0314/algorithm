function solution(s){
    let answer = true;
    let pNum = 0;
    let yNum = 0;
    
    const arr = s.split("");
    arr.forEach(v => {
        if(v === 'p' || v === 'P') pNum++;
        if(v === 'y' || v === 'Y') yNum++;
    })

    return pNum === yNum ? true : false;
}