const AllOrNothing = (key,answers) =>{
    let result = []
    for (let item in key){
        if ((key[item]!=="_")&&(key[item]===answers[item])){result.push(1)}
        else if((key[item]!=="_")){result.push(0)}
    }
    const sumOfNumbers = result.reduce((acc, number) => acc + number, 0)
    return sumOfNumbers===result.length?true:sumOfNumbers === 0
}
console.log(AllOrNothing(["A", "_", "C", "_", "B"],["A", "Ddasdas", "C", "E", "B"]))