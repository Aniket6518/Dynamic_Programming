const grid=(m,n,memo={})=>{
    const key=m+","+n;
    if(key in memo)
        return memo[key];
    if(m===0 || n===0)
        return 0;
    if(m===1 && n===1)
        return 1;
    memo[key]=grid(m-1,n,memo)+grid(m,n-1,memo);
    return memo[key];
}



console.log(grid(1,1));//1
console.log(grid(2,3));//3
console.log(grid(3,2));//3
console.log(grid(3,3));//6
console.log(grid(18,18));//2333606220