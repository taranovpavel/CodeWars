const FindTheParity = (arr) => {
    newArr = arr.filter((item)=>item%2===0)
    newArr.length>1?newArr = arr.filter((item)=>item%2!==0):""
    return (newArr[0])
}
console.log(FindTheParity([2,6,8,10,3]));