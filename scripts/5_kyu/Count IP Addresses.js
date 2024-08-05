const ipsBetween = (start, end) =>{
    start = start.split(".")
    end = end.split(".")
    let result = []
    let resultInt = 0
    for(let i = 0;i<4;i++){
        result.push(end[i]-start[i])
    }
    for(let i = 3;i>=0;i--){
        if(i===3){resultInt += result[i]}
        if(i===2){resultInt += result[i]*256}
        if(i===1){resultInt += result[i]*256**2}
        if(i===0){resultInt += result[i]*256**3}
    }
    return resultInt
}
console.log(ipsBetween("180.0.0.0", "181.0.0.0"));