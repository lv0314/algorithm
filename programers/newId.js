function solution(new_id) {
    var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;

    var a = new_id.toLowerCase().replace(reg, "");
    a = a.split('');
    for(let i = 0; i < a.length; i++){
        if(a[i] === "." && a[i] === a[i+1]) a[i] = undefined;
    }
    a = a.join("");

    if(a[0] === ".") a = a.substring(1)
    if(a[a.length-1] === ".") a = a.substring(0, a.length-1)

    if(a === "") a = "a";

    if(a.length >= 16) a = a.substring(0,15)
    if(a[0] === ".") a = a.substring(1)
    if(a[a.length-1] === ".") a = a.substring(0, a.length-1)

    if(a.length <= 2) {
        a = a.split("");
        while(a.length !== 3){
            a.push(a[a.length-1])
        }
        a = a.join("")
    }
    return a;
}