const FinalGrade= (test,projects) =>{
    if((test>=90)||(projects>=10)){
        return 100
    }else if((test>=75)||(projects>=5)){
        return 90
    }else if((test>=50)||(projects>=2)){
        return 75
    }else{
        return 0
    }
}
console.log(FinalGrade(90,0))
console.log(FinalGrade(0,10))
console.log(FinalGrade(75,0))
console.log(FinalGrade(0,5))
console.log(FinalGrade(50,0))
console.log(FinalGrade(0,2))
console.log(FinalGrade(0,0))