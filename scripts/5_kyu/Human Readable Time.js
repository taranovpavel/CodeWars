const humanReadable = (int) =>{
    x = Math.floor(int/60)
    y = Math.floor(x/60)
    const isMore = (int) =>{return int>9?int:"0"+int}
    return `${isMore(y)}:${isMore(x-y*60)}:${isMore(int-x*60)}`
}
console.log(humanReadable(5000));