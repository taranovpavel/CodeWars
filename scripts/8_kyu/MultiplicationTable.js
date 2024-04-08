const MultiplicationTable = (number) =>{
    let result = []
    for (let i = 1; i<11;i++){
        result.push(`${i} * ${number} = ${i*number}`)
    }
    return result.join("\n")
}
