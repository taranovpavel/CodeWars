const FrogsDinner = (number) =>{
    let chris = 0
    let tom = 0
    let cat = 0
    for (let i = 0;i<=number;i++){chris += i}
    for (let i = 0;i<=Math.floor(chris/2);i++){tom+=i}
    for (let i = 0;i<=chris+tom;i++){cat += i}
    return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`
}
console.log(FrogsDinner(5))