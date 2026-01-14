let list = [10, 2, 4, 8, 15, 7]
let max = -1e9;
for (let i=0 ; i<= list.length; i++) {
    if(max < list[i])
        max = list[i];
}
console.log(max)