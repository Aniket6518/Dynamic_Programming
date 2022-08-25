const howSum=(targetnum,arr)=>{
    res=Array(targetnum+1).fill(null);
    res[0]=[];
    for (let i = 0; i <= targetnum; i++)
        if (res[i]!=null) 
            for (let j = 0; j < arr.length; j++) 
                if((i+arr[j])<=targetnum)
                    res[i+arr[j]]=[...res[i],arr[j]];
    return res[targetnum];
};

console.log(howSum(7,[2,3]));// [3,2,2]
console.log(howSum(7,[5,3,4,7]));// [4,3]
console.log(howSum(7,[2,4]));// null
console.log(howSum(8,[2,3,5]));// [2,2,2,2]
console.log(howSum(300,[7,14]));// null