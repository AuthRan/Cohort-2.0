let list = [10, 2, 4, 8, 15, 7]

console.log(list)

let reverse = []
for(let i = list.length-1, j=0; i >= 0; i--, j++){
    reverse[j] = list[i]
}

console.log(reverse)