function sum(a,b){
    return a+b
}

function container(a,b,fun){
   return fun(a,b)
}

console.log(container(2,3,sum))