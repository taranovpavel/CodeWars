const StonePick = (array) =>{
    let stick = 0
    let cobblestone = 0
    for (let i = 0;i<array.length;i++){
        if (array[i]==="Wood"){stick += 4}
        else if (array[i]==="Sticks"){stick += 1}
        else if (array[i]==="Cobblestone"){cobblestone += 1}
    }
    stick = Math.floor(stick/2)
    cobblestone = Math.floor(cobblestone/3)
    return stick>cobblestone?cobblestone:stick
}
