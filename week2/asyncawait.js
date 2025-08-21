function sum(a,b) {
    return a+b
}

function asyncFunction(a,b) {
    return new Promise(function (resolve) {
        resolve(sum(a,b))
    })
}

async function main(){
    let result = await(asyncFunction(3,4))
    console.log(result)
}

main()