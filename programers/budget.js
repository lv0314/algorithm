function solution(d, budget) {
    var answer = 0;

    var sorted = d.sort((a, b) => a - b );

    sorted.forEach( v => {
        budget = budget - v;
        if(budget >= 0) {
            answer++;
        }
    })

    return answer;
}