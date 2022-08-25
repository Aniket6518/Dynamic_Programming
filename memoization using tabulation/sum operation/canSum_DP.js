const canSum=(targetnum,arr)=>{
    const res=Array(targetnum+1).fill(false);
    res[0]=true;
    for(let i=0;i<targetnum+1;i++)
        if(res[i])
            for (let j = 0; j < arr.length; j++) 
                if((i+arr[j])<=targetnum)
                    res[i+arr[j]]=true;
    return res[targetnum];
};


console.log(canSum(7,[2,3]));// true
console.log(canSum(7,[5,3,4,7]));// true
console.log(canSum(7,[2,4]));// false
console.log(canSum(7,[2,3,5]));// true
console.log(canSum(300,[7,14]));// false