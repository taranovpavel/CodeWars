const CountingDuplicates = (str) =>{
    const arr = str.toLowerCase().replaceAll(' ', '').split('').sort()
    let result = 0
    for(let i = 1;i<arr.length;i++){ if((arr[i]===arr[i-1])&&(arr[i]!==(arr[i-2]))){ result+=1}}
    return result
}
console.log(CountingDuplicates("aabbcdeeeeeee"));