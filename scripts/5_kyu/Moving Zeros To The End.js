const moveZeros = (arr) =>{
    // result = []
    // x = 0
    // for(let i = 0;i<arr.length;i++){
    //     arr[i]===0?x+=1:result.push(arr[i])
    // }
    // for(let i = 0;i<x;i++){
    //     result.push(0)
    // }
    // return result
    return arr.filter((x)=>{return x!==0}).concat(arr.filter((x)=>{return x===0}))
}
console.log(moveZeros([0,0,1,5,2,false,"s"]));
