const canConstruct=(str,arr,memo={})=>{
    if(str in memo)
        return memo[str];
    if(str==="")
        return true;
    for(let ele of arr){
        if(ele.length<=str.length && str.substring(0,ele.length)===ele){
            let newstr=str.substring(ele.length,str.length);
            if(canConstruct(newstr,arr,memo)===true){
                memo[newstr]=true;
                return true;
            }
        }
    }
    memo[str]=false;
    return false;
};


console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]));// true
console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]));// false
console.log(canConstruct("enterapotentpot",["a","p","ent","enter","et","o","t"]));// true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
]));// false