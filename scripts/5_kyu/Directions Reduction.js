const dirReduc = (arr) =>{
    let n=0
    let w=0
    let result = []
    for(let i = 0;i<arr.length;i++){
        if(arr[i][0].toLowerCase()==="n"){n+=1}
        if(arr[i][0].toLowerCase()==="w"){w+=1}
        if(arr[i][0].toLowerCase()==="s"){n+=1}
        if(arr[i][0].toLowerCase()==="e"){w-=1}
    }
    if(n<0){
        for(let i = 0;i>n;i--){
            result.push("SOUTH")
        }
    }
    if(n>0){
        for(let i = 0;i<n;i++){
            result.push("NORTH")
        }
    }
    if(w<0){
        for(let i = 0;i>w;i--){
            result.push("EAST")
        }
    }
    if(w>0){
        for(let i = 0;i<w;i++){
            result.push("WEST")
        }
    }
    return result
}