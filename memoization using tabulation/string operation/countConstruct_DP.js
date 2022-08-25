const countConstruct=(str,arr)=>{
    const res=Array(str.length+1).fill(0);
    res[0]=1;
    for(let i=0;i<res.length;i++)
        if(res[i]!=0)
            for(let temp of arr)
                if(i+temp.length<=str.length)
                    if(str.substring(i,i+temp.length)==temp)
                        res[i+temp.length]+=res[i];
    return res[str.length];
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