const TypeOfSum = (a,b) =>{
    if (((a+b)%1===0)||((a === undefined)&&(b%1===0)||((b===undefined)&&(a%1===0)))||((a===undefined)&&(b===undefined))){
        return"number"
    }else{
        return "string"
    }

    // return typeof(a + b)

}
console.log(TypeOfSum(0,undefined))