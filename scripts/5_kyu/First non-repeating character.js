const firstNonRepeatingLetter = (str) =>{
    for(let i = 0;i<str.length;i++){
        let x = 0
        for(let ii = 0;ii<str.length;ii++){
            if(str[i].toLowerCase()===str[ii].toLowerCase()){ x += 1 }
        }
        if(x===1){return str[i]}
    }
    return ""
}
console.log(firstNonRepeatingLetter("sees"));