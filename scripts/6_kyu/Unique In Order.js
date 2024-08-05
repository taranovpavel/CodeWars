const uniqueInOrder = (str) =>{
    let result = [str[0]]
    for(let i = 1;i<str.length;i++){
        if(str[i]!==str[i-1]){result.push(str[i])}
    }
    return (result[0]!==undefined?result:[])
}
console.log(uniqueInOrder("AAAVASSDASF"));