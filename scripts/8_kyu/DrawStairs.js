const DrawStairs = (n) =>{
    let result = []
    for (let i = 0;i<n;i++){
        result[i] = `${" ".repeat(i)}I`
    }
    return result.join("\n")
}
console.log(DrawStairs(6))