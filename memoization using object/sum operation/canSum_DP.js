const canSum=(targetnum,arr,memo={})=>{
    if(targetnum in memo)
        return memo[targetnum];
    if(targetnum<0)
        return false;
    if(targetnum===0)
        return true;
    for(let number of arr){
        const remainder=targetnum-number;
        if(canSum(remainder,arr,memo)===true){
            memo[targetnum]=true;
            return true;
        }
    }
    memo[targetnum]=false;
    return false;
};


console.log(canSum(7,[2,3]));// true
console.log(canSum(7,[5,3,4,7]));// true
console.log(canSum(7,[2,4]));// false
console.log(canSum(7,[2,3,5]));// true
console.log(canSum(300,[7,14]));// false