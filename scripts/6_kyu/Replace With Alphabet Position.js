const ReplaceWith = (str) =>{
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let result = []
    for(let i = 0;i<str.length;i++){
        for(let ii=0;ii<alphabet.length;ii++){
            if(str[i].toLowerCase()===alphabet[ii]){
                result.push(ii+1)}}}
    return result.join(" ")
}
console.log(ReplaceWith());