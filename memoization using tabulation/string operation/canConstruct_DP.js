const canConstruct=(str,arr)=>{
    const res=Array(str.length+1).fill(false);
    res[0]=true;
    for(let i=0;i<res.length;i++)
        if(res[i])
            for(let temp of arr)
                if(i+temp.length<=str.length)
                    if(str.substring(i,i+temp.length)==temp)
                        res[i+temp.length]=true;
    return res[str.length];
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