const stopGninnipSMySdroW = (str) =>{
    const array = str.split(" ")
    let result = []
    for (let i = 0;i<array.length;i++){
        if (array[i].length>=5){
            let newWord = []
            for (let ii = array[i].length-1; ii >= 0; ii--){newWord.push(array[i][ii])}
            result.push(newWord.join(""))
        }else{result.push(array[i])}
    }
    return (result.join(" "))
}
