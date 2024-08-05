const domainName = (url) =>{
    let arr = url.split('/')
    if((arr[0]==="http:")||(arr[0]==="https:")){
        arr = arr[2].split(".")
    }else{
        arr = arr[0].split(".")
    }
    return (arr[0]==="www"?arr[1]:arr[0])
}
console.log(domainName("http://www.google.com"));
console.log(domainName("http://ydyz-b.tv/archive/"));
console.log(domainName("ydyz-b.tv/archive/"));