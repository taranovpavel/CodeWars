const TreePhotography = (array) =>{
    let left = 0
    let right = 0
    let minL = array[0]
    let minR = array[array.length-1]
    for (let i = 1;i<array.length;i++){
        if (minL<array[i]){left++;minL = array[i]}
    }
    for (let i = array.length-2;i>0;i--){
        if (minR<array[i]){right++;minR = array[i]}
    }
    return left>right?"left":"right"
}
console.log(TreePhotography([3,6,5,9,6,9,3,9,2,1,2,6,3,1]))