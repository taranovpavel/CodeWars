const cakes = (recipe, available) =>{
    let keys = Object.keys(recipe), result = []
    for(let i = 0;i<keys.length;i++){
        result.push(Math.floor(available[keys[i]]/recipe[keys[i]]))
    }
    return (Math.min.apply(null,result)>0?Math.min.apply(null,result):0)
}
console.log(cakes({ flour: 300, sugar: 150, milk: 100,oil: 100},{sugar: 500, flour: 2000, milk: 2000}));