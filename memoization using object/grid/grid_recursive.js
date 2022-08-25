// number of ways to reach at bottom right of a mxn matrix ,starting from top left.
// only moves allowed are right and down
// hint :consider only part of matrix that can be iterated,if you move down 
// don't consider the row above it
const grid=(m,n)=>{
    if(m===0 || n===0)
        return 0;
    if(m===1 && n===1)
        return 1;
    return grid(m-1,n)+grid(m,n-1);
}



console.log(grid(1,1));//1
console.log(grid(2,3));//3
console.log(grid(3,2));//3
console.log(grid(3,3));//6
console.log(grid(18,18));//2333606220