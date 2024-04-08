const MisleadingSigns = (shirtWord,yourWord,friendsLetters) =>{
    let result = 0
    for(let i = 0; i<shirtWord.length;i++){
        if (shirtWord[i]!==yourWord[i]){
            for (let item in friendsLetters){
                if ((shirtWord[i]===friendsLetters[item])||(yourWord[i]===friendsLetters[item])){
                    result += 1
                }
            }
        }
    }
    return result > 0
}

console.log(MisleadingSigns("cyiec","anjiu","gjz"))