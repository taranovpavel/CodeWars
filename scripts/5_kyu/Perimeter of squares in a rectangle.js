const perimeter = (n) =>{
    let result = []
    let x = 0,y = 1,c = y
    result.push(y)
    for(let i = 0;i<n;i++){
        c = y
        y = x+y
        x = c
        result.push(y)
    }
    return result.reduce((a,b)=>{return a+b})*4
}
console.log(perimeter(0));