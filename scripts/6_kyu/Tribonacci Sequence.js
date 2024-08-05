const tribonacci = (arr,n) =>{
    if(n>3){
        while(arr.length!==n){
            let x = 0
            for(let i = arr.length-3;i<arr.length;i++){x += arr[i]}
            arr.push(x)
        }
        return arr
    }else{
        let result = []
        for(let i = 0;i<n;i++){result.push(arr[i])}
        return result
    }
}
console.log(tribonacci([1,1,1],10))