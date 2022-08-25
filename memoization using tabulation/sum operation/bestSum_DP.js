const bestSum=(targetnum,arr)=>{
    let res=Array(targetnum+1).fill(null);
    res[0]=[];
    for(let i = 0; i <= targetnum; i++)
        if(res[i]!=null)
            for(let num of arr)
                if((i+num)<=targetnum)
                    if(res[i+num]==null || res[i+num].length > [...res[i],num].length)
                            res[i+num]=[...res[i],num];
    return res[targetnum];
};


console.log(bestSum(7,[5,3,4,7]));// [7]
console.log(bestSum(8,[2,3,5]));// [3,5]
console.log(bestSum(8,[1,4,5]));// [4,4]
console.log(bestSum(100,[1,2,5,25]));// [25,25,25,25]