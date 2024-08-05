const digPow = (n,p) =>{
    const x = n+""
    let result = 0
    for(let i = 0;i<x.length;i++){result+=x[i]**(p+i)}
    if(result%n===0){
        return result/n
    }
    return -1
}
console.log(digPow(92,1));