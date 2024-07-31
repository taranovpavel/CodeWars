const Bugger = (num) =>{
    nums = (''+num).split('')
    let count = 0
    while(nums.length>1){
        let result = nums[0]*1
        for(let i = 1;i<nums.length;i++){result*=nums[i]*1}
        count+=1
        nums= (""+result).split("")
    }
    return count
}
