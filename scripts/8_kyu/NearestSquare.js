const NearestSquare = (n) =>{
    if ((Math.sqrt(n)%1)===0){
        return n
    }else{
        return Math.pow(Math.round(Math.sqrt(n)),2)
    }
}
console.log(NearestSquare(121))