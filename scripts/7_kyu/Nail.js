const nail = (l) =>{
    if(l>=8){
        return 3
    }else if(l===7){
        return 2
    }else if(l===6){
        return 1
    }else if((l===5)||(l===4)) {
        return 0
    }else {
        return 3
    }
}