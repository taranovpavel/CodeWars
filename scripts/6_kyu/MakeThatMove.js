const MakeThatMove = (array) =>{
    for(let item = 0;item<=array.length;item++){
        if (array[item]==="q"){
            for (let i = item;i>=0;i--){
                if (array[i]==="p"){return "x"}
                else if (i===0){return "q"}
            }
        }
        if (array[item]==="o"){return "o"}
        else if (item === array.length){return "p"}
    }
}