const CountSheep = (sheep) =>{
    let result = ""
    for (let i = 0; i <= sheep;i++){result += `${i} sheep...`}
    return sheep === 0?"" : result
}