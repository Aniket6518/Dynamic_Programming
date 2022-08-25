const fib=(num,memo={})=>{
    if(num in memo)
        return memo[num];
    if(num===1 || num===2)
        return 1;
    memo[num]=fib(num-1,memo)+fib(num-2,memo);
    return memo[num];
}


console.log(fib(4));//3
console.log(fib(13));//233
console.log(fib(1));//1
console.log(fib(2));//1
console.log(fib(80));//23416728348467684