let arr = [1,2,3,4,5,6,7,8];
let max = arr.reduce(function(acc, curr, index, arr){
    return Math.max(acc, curr);
}, 0)
console.log(max);

