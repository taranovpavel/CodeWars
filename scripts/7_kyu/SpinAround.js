const SpinAround = (array) =>{
    let result = 0
    array.map((direction)=>direction==="right"?result+=90:result-=90)
    return result<0?Math.floor(result/-360):Math.floor(result/360)
}
console.log(SpinAround(['left', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']))