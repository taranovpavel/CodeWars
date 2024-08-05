const pigIt = (str) =>{
    arr = str.split(' ')
    result = []
    for(let i = 0;i<arr.length;i++){
        if(arr[i].toLowerCase()!==arr[i].toUpperCase()){
            let x = ""
            if(arr[i].length>1){for(let ii = 1;ii<arr[i].length;ii++){x+=arr[i][ii]}}
            x+=arr[i][0]
            x+="ay"
            result.push(x)
        }else{result.push(arr[i])}
    }
    return result.join(" ")
}
console.log(pigIt("Pig latin is cool"));