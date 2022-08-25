// write the shortest combination if the sum is possible by given array or write null
const bestSum=(targetnum,arr)=>{
    if(targetnum===0)
        return [];
    if(targetnum<0)
        return null;
    let shortestCombination=null;
    for(let num of arr){
        const remainder=targetnum-num;
        const remainderResult=bestSum(remainder,arr);
        if(remainderResult!==null){
            const combination=[...remainderResult,num];
            if(shortestCombination===null || shortestCombination.length > combination.length)
                shortestCombination=combination;
        }
    }
    return shortestCombination;
};


console.log(bestSum(7,[5,3,4,7]));// [7]
console.log(bestSum(8,[2,3,5]));// [3,5]
console.log(bestSum(8,[1,4,5]));// [4,4]
console.log(bestSum(100,[1,2,5,25]));// [25,25,25,25]