function callBack(a, b, func){
    return func(a,b)
}

function sum(a,b){
    return (a+b)
}
function sub(a,b){
    return (a-b)
}

console.log(callBack(7, 2, sub))