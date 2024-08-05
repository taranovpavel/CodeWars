const isPangram = (str) =>{
    alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}