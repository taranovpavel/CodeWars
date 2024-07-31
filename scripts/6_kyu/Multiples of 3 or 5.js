const threeOrFive = (num) =>{
    let result = 0
    for(let i = 0;i<num;i++){i%3===0?result+=i:i%5===0?result+=i:""}
    return result
}