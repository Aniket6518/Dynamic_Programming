// display the ways string can be constructed using given array of strings
// in a 2D matrix ,write null matrix if no way is possible
const allConstruct=(str,arr)=>{
    if(str==="")
        return [[]];
    const result=[];
    for(let word of arr){
        if(str.substring(0,word.length)===word){
            let tempstr=allConstruct(str.substring(word.length,str.length),arr);
            const targetWays=tempstr.map(ways=>[word,...ways]);
            result.push(...targetWays);
        }
    }
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