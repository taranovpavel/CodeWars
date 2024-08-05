const yourOrder = (str) =>{
    let result = []
    arr = str.split(' ')
    for(let x = 1;x<=arr.length;x++){
        for(let i = 0;i<arr.length;i++){
            for(let w = 0;w<arr[i].length;w++){
                if(arr[i][w]==x){
                    result.push(arr[i])
                }
            }   
        }
    }   
    return result.join(" ")
}
console.log(yourOrder("is2 Thi1s T4est 3a"));