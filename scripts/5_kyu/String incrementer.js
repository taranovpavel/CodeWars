const incrementString = (str) =>{
    const a = str.replace(new RegExp("[0-9]", "g"), "")
    let b = str.replace(new RegExp("[a-zA-Z]", "g"), "")
    let c = b.replace(new RegExp("0", "g"), "")
    c = b*1>0?(b*1+1):1
    let d =[]
    for(let i = 0;i<b.length-(c+"").length;i++){
        d.push("0")
    }
    d.push(c+"")
    return(a+d.join(""))
}
console.log(incrementString("1"))