// fibonacci series
const fib=(num)=>{
    if(num===1 || num===2)
        return 1;
    return fib(num-1)+fib(num-2);
}



console.log(fib(4));//3
console.log(fib(13));//233
console.log(fib(1));//1
console.log(fib(2));//1
console.log(fib(80));//23416728348467684