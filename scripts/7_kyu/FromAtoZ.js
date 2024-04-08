const FromAtoZ = (sp) =>{
    const array = "abcdefghijklmnopqrstuvwxyz"
    let first = 0
    let second = 0
    let result = ""
    for (const item in array){
        if(sp[0].toLowerCase()===array[item]){first = item*1}
        if(sp[2].toLowerCase()===array[item]){second = item*1}
    }
    for(let i = first ; i<=second;i++){
        if (sp.toLowerCase()!==sp){result+=array[i].toUpperCase()}
        else{result+=array[i]}
    }
    return result
}
console.log(FromAtoZ("f-s"))