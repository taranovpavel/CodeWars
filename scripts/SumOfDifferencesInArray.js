const SumOfDifferencesInArray = (array) =>{
    array = array.sort((a,b)=>b-a)
    let result = 0
    for (let i = 0;i<array.length-1;i++){
        result += (array[i]-array[i+1])
    }
    return result
}
console.log(SumOfDifferencesInArray([7,7,7,7,7,7,8]))