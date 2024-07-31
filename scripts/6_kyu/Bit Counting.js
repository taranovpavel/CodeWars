const Bit = (num) =>{
    result = []
    if(num<1){ return (0)}
    while(num!==1){
        if(Math.floor(num/2)===num/2){result.push(0)}
        else{result.push(1)}
        num = Math.floor(num/2)
    }
    result = result.filter((item)=>item===1)
    return result.length+1
}
console.log(Bit(1652));