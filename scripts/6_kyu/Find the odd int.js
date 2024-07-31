const findTheOddInt = (nums) =>{
    const newNums = nums.sort(function (a, b) {return a - b})
    let a = 0
    console.log(newNums)
    for (let i = 0;i<newNums.length;i++){
        if ((newNums[i]===newNums[i-1])||(i===0)){a+=1;
            console.log(a)}
        else{
            console.log(a)
            if (a%2!==0){return(newNums[i-1])}
            if(i===newNums.length-1){return(newNums[newNums.length-1])}
            a=1
        }
    }
    return (newNums[0])
}
console.log(findTheOddInt([-1,-1,-2,-2,1,1,2,2,20,20,3,3,4,4,5,5,5]))
