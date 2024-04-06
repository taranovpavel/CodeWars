const CatYearsDogYears = (humanYears) =>{
    let dogYears = 0
    let catYears = 0
    for (let i = 0;i < humanYears;i++){
        if (i===0){
            dogYears +=15
            catYears +=15
        }else if(i===1){
            dogYears +=9
            catYears +=9
        }else{
            dogYears +=5
            catYears +=4
        }
    }
    return [humanYears,catYears,dogYears]
    
    // if (y == 1) return [1, 15, 15]
    // if (y == 2) return [2, 24, 24]
    // return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]

}
