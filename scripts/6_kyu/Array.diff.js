const ArrayDiff = (one,two) =>{
    for(let i = 0;i<two.length;i++){one = one.filter((num)=>num===two[i]) }
    return one
}
console.log(ArrayDiff([1,5],[5,1]))
