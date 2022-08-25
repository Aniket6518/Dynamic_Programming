const countConstruct=(str,arr,memo={})=>{
    if(str in memo)
        return memo[str];
    if(str==="")
        return 1;
    let totalCount=0;
    for(let ele of arr){
        if(str.substring(0,ele.length)===ele){
            let newstr=str.substring(ele.length,str.length);
            let noOfWays=countConstruct(newstr,arr,memo);
            totalCount+=noOfWays;
        }
    }
    memo[str]=totalCount;
    return totalCount;
};

console.log(countConstruct("purple",["pur","p","ur","le","purpl"]));// 2
console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"]));// 1
console.log(countConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]));// 0
console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));// 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
]));// 0
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",[
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
]));// 207991012832