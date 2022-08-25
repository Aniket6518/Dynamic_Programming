const grid=(m,n)=>{
    const matrix=Array(m+1).fill().
                map(()=>Array(n+1).fill(0));
    matrix[1][1]=1;
    for (let i = 0; i <=m; i++) 
        for (let j = 0; j <=n; j++) {
            if (j<n)
                matrix[i][j+1] += matrix[i][j];
            if(i<m)
                matrix[i+1][j] += matrix[i][j];
        }
    return matrix[m][n];
}



console.log(grid(1,1));//1
console.log(grid(2,3));//3
console.log(grid(3,2));//3
console.log(grid(3,3));//6
console.log(grid(18,18));//2333606220