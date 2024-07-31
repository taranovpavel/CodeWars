const ConvertString = (str) =>{
    let result = []
    let x = []
    let xx = []
    for(let i = 1;i<str.length;i++){if((str[i]==="-")||(str[i]==="_")){x.push(i)}}
    result.push(str[0])
    str = str.toLowerCase()
    xx.push(str.substring(0,x[0]))
    for(let i = 0;i<x.length;i++){xx.push(str.substring(x[i]+1,x[i+1]))}
    for(let i = 0;i<xx.length;i++){if(i===0){ result.push(xx[0].slice(1))}else{result.push(xx[i][0].toUpperCase()+xx[i].slice(1))}    }
    return(result.join(""))
}
console.log(ConvertString("the-stealth-warrior"));
console.log(ConvertString("A_CAT-IS-HUNGRY"));