const ClosingInSum = (array) =>{
    let  reversedArray = ""
    let result = 0
    for (let i = array.length-1; i>0;i--){reversedArray += array[i]}
    for (let i = 0; i<Math.floor(array.length/2);i++){result+=Number(array[i]===0?"":array[i]+reversedArray[i])}
    array.length%2===1?result+=Number(array[Math.floor(array.length/2)]):0
    return result
}
console.log(ClosingInSum("0041241241124124124122"))