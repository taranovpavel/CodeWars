// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick',
// switch to always returning the opposite boolean value.

const FlickSwitch = (array) => {
    let boolean = true
    let newArray = []
    for (let i = 0; i<array.length;i++){
        array[i]===("flick")?boolean=!boolean:""
        newArray.push(boolean)
    }
    return newArray
}
console.log(FlickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]))