const ArrayPlusArray = (array1, array2) =>{
    let result = 0
    for (let i = 0; i<array1.length; i++){
        result += array1[i]+array2[i]
    }
    return result
}