// const x:number = 5
// console.log(x)

// function greet(name: string) {
//     console.log(`Hey! ${name}`)
// }

// greet("Ashutosh")

// function sum(a: number, b: number): number {
//     return a+b
// }

// let result= sum(4, 5)
// console.log(result)

function func1(func: string) {
    setTimeout(() => {
        func
    }, 1*1000);
}

function func2(name: string): string {
    return `Hello ${name}`
}

console.log(func1(func2("Ashutosh")))