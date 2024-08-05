const productFib = (prod) =>{
    let a = 1,b = 1
    while(a*b<prod) {
      let c = a + b
      a = b
      b = c
    }
    return [a,b,prod-a*b===0]
}
console.log(productFib(714));