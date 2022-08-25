// write a boolean is if the sum is possible by given array
const canSum=(targetnum,arr)=>{
    if(targetnum<0)
        return false;
    if(targetnum===0)
        return true;
    for(let number of arr){
        const remainder=targetnum-number;
        if(canSum(remainder,arr)===true)
            return true;
    }
    return false;
};


console.log(canSum(7,[2,3]));// true
console.log(canSum(7,[5,3,4,7]));// true
console.log(canSum(7,[2,4]));// false
console.log(canSum(7,[2,3,5]));// true
console.log(canSum(300,[7,14]));// false