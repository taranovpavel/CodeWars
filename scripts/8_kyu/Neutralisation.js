// Given two strings comprised of + and -,
// return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral,
// and are shown as the number 0.

const Neutralisation = (string1,string2) =>{
    let newString = ""
    for (let i = 0;i < string1.length;i++){
        if ((string1[i]==="+")&&(string2[i]==="-")||(string1[i]==="-")&&(string2[i]==="+")){
            newString+="0"
        }else if(string1[i]==="+"){
            newString+="+"
        }else{
            newString+="-"
        }
    }
    return newString
}
console.log(Neutralisation("+-----+++-", "--+-+-++--"))