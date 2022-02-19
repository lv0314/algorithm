function solution(arr)
{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]) {
            arr[i] = undefined
        }
    }

    var res = arr.join("")

    return res.split("").map(v => Number(v))
}