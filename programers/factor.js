function solution(left, right) {
    var answer = 0;
    for(var i = left; i <= right; i++){
        if(getFactor(i)%2 === 0){
            answer = answer + i;
        } else {
            answer = answer - i;
        }
    }
    return answer;
}

function getFactor(num) {
    var res = new Set();
    
    for(var i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0) {
            res.add(i);
            res.add(num / i)
        }
    }
    return res.size;
}

// console.log(getFactor(13),
// getFactor(14),
// getFactor(15),
// getFactor(16))
