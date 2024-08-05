const scramble = (str1, str2) =>{
    let result = 0
    str1 = str1.split("")
    str2 = str2.split("")
    for(let i = 0;i<str2.length;i++){
        if(str1.indexOf(str2[i])!==-1){
            result+=1
            str1[str1.indexOf(str2[i])]=""
        }
    }
    return result===str2.length
}
console.log(scramble('rkqosdlww','wwosrld'));