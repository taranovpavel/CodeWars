const SumOfDigits = (num) =>{
    let result = 0 
    nums = (''+num).split('')
    for(let i = 0;i<nums.length;i++){result+=nums[i]*1}
    while(result>9){
        newNums = (''+result).split('')
        result = 0
        for(let i = 0;i<newNums.length;i++){result+=newNums[i]*1}
    }
    return result
}
console.log(SumOfDigits(923132))
