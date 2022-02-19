function solution(s) {
    var answer = s.split('')
    var length = answer.length;

    if(length %2 === 1) return answer[Math.floor(length/2)]

    return answer[Math.floor(length/2)-1]+answer[Math.floor(length/2)]
}