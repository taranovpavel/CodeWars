const PartyPeople = (array) =>{
    array.sort((a,b)=> b-a)
    let peopleLeave = 0
    for (let i = 0;i<array.length;i++){
        if (array[i]>array.length-peopleLeave){peopleLeave+=1}
    }
    return array.length-peopleLeave
}
console.log(PartyPeople([19,1,0,16,19,11,16,11,4]))