const orderWeight = (str) =>{
    const sumOfParts = (str) =>{
        return str.split("").reduce((a,b)=>a + +b,0)
    }
    const orderWeight = (string) => {
        return string
            .split(' ')
            .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
            .join(' ');
    }
    return orderWeight(str)
}
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))    ;