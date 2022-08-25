// check if the given string can be constructed using given array of strings
const canConstruct=(str,arr)=>{
    if(str==="")
        return true;
    for(let ele of arr){
        if(ele.length<=str.length && str.substring(0,ele.length)===ele){
            let newstr=str.substring(ele.length,str.length);
            if(canConstruct(newstr,arr)===true){
                return true;
            }
        }
    }
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