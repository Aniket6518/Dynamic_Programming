const allConstruct=(str,arr,memo={})=>{
    if(str in memo)
        return memo[str];
    if(str==="")
        return [[]];
    const result=[];
    for(let word of arr){
        if(str.substring(0,word.length)===word){
            let tempstr=allConstruct(str.substring(word.length,str.length),arr,memo);
            const targetWays=tempstr.map(ways=>[word,...ways]);
            result.push(...targetWays);
        }
    }
    memo[str]=result;
    return result;
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
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaz",["a","aa","aaa","aaaa","aaaaa"]));
// []