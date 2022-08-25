const fib=(num)=>{
    const arr=Array(num+1).fill(0);
    arr[1]=1;
    for(let i=0;i<num;i++){
        arr[i+1]+=arr[i];
        arr[i+2]+=arr[i];
    }
    return arr[num];
}


console.log(fib(4));//3
console.log(fib(13));//233
console.log(fib(1));//1
console.log(fib(2));//1
console.log(fib(80));//23416728348467684