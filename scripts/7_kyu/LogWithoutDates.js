const LogWithoutDates = (array) =>{
    let days = 1
    for (let i = 0;i<array.length;i++){if(array[i]>=array[i+1]){days++}}
    return array.length===0?0:days
}
console.log(LogWithoutDates(["12:00:00","23:59:59","00:00:00"]))