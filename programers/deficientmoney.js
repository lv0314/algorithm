function solution(price, money, count) {
    var total = [];
    for(let i = 1; i <= count; i++){
        total.push(price * i)
    }

    var deficiency = total.reduce( (acc, cur) => acc + cur) - money
    
    return deficiency < 0 ? 0 : deficiency;
}

