const DoesMyNum = (num) =>{
    let result = 0 
    nums = (''+num).split('')
    for(let i = 0;i<nums.length;i++){result+=nums[i]**nums.length}
    return result===num
}