const generateHashtag = (str) => {
    const arr = str.split(' ')
    let result = ["#"]
    for(let i = 0;i<arr.length;i++){
        if(arr[i].length>0){
            const first = arr[i][0].toUpperCase()
            const rest = [...arr[i]]
            rest.splice(0,1)    
            result.push([first,...rest].join(""))
        }
    }
    result = result.join("")
    return (result.length>140?false:result.length<2?false:result)
}
console.log(generateHashtag(""));