const rot13 = (text) => {
    let result = []
    for(i = 0; i < text.length; i++){
        if(text[i].toUpperCase()!==text[i].toLowerCase()){
            text[i].charCodeAt(0)<96?x=90:x=122
            let asc_code = text[i].charCodeAt(0) + 13
            asc_code>x?asc_code = asc_code-26:''
            result.push(String.fromCharCode(asc_code));
        }else{result.push(text[i])}
    }
    return result.join('')
}
console.log(rot13("Test test"));
