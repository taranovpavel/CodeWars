// Write a function that will check if two given characters are the same case.
//
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
const CheckSameCase = (a,b) =>{
    if ((a.toUpperCase() === a.toLowerCase())||(b.toUpperCase() === b.toLowerCase())){
        return -1
    }else if((a.toUpperCase()===a)&&(b.toUpperCase()===b)||(a.toLowerCase()===a)&&(b.toLowerCase()===b)){
        return 1
    }else{
        return 0
    }
}