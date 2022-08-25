const allConstruct=(str,arr)=>{
    const res=Array(str.length+1)
        .fill()
        .map(() => []);
    res[0]=[[]];
    for(let i=0;i<res.length;i++)
        for(let temp of arr)
            if(i+temp.length<=str.length)
                if(str.slice(i,i+temp.length)===temp){
                    const newCombination=res[i].map(subArray=>[...subArray,temp]);
                    res[i+temp.length].push(...newCombination);
                }
    return res[str.length];
};


console.log(allConstruct("purple",["pur","p","ur","le","purpl"]));
// [ 
//   [ 'pur', 'p', 'le' ], 
//   [ 'p', 'ur', 'p', 'le' ] 
// ]
console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd","ef","c"]));
// [
//   [ 'ab', 'cd', 'ef' ],
//   [ 'ab', 'c', 'def' ],
//   [ 'abc', 'def' ],
//   [ 'abcd', 'ef' ]
// ]
console.log(allConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]));
// []
console.log(allConstruct("aaaaaaaaaaz",["a","aa","aaa","aaaa","aaaaa"]));
// []