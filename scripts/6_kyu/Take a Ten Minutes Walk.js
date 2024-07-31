const TakeAMenuteWolk = (arr) =>{
    if(arr.length!==10){
        return false
    }else{
        let w = 0
        let s = 0
        for(let i = 0;i<arr.length;i++){
            if(arr[i]==="w"){w+=1}
            if(arr[i]==="s"){s+=1}
            if(arr[i]==="n"){s-=1}
            if(arr[i]==="e"){w-=1}
        }
        return w===0?s===0?true:false:false
    }
}