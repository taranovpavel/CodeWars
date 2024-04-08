const ReversedSequence = (num) =>{
    let result = []
    for (let i = 1; i<=num;i++)
        // (let i=n; i>0; i--)
    {result.push(i)}
    return result.sort((a,b)=> b-a)
}