function sum(a,b){
    return a+b
}

function promiseFunction(a,b){
    return new Promise(function (resolve) {
        resolve(sum(a,b))
    })
}

let p = promiseFunction(3,4)
p.then(function(result){
    console.log(result)
})