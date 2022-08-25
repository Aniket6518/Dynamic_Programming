const howSum=(targetnum,arr,memo={})=>{
    if (targetnum in memo)
        return memo[targetnum];
    if (targetnum === 0)
        return [];
    if (targetnum < 0)
        return null;
    for(let num of arr){
        const remainder=targetnum-num;
        const remainderResult=howSum(remainder,arr,memo);
        if(remainderResult !== null){
            memo[targetnum]=[...remainderResult,num];
            return memo[targetnum];
        }
    }
    memo[targetnum]=null;
    return null;
};


console.log(howSum(7,[2,3]));// [3,2,2]
console.log(howSum(7,[5,3,4,7]));// [4,3]
console.log(howSum(7,[2,4]));// null
console.log(howSum(8,[2,3,5]));// [2,2,2,2]
console.log(howSum(300,[7,14]));// null