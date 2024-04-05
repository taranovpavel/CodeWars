// Given 2 elevators (named "left" and "right")
// in a building with 3 floors (numbered 0 to 2),
// write a function elevator accepting 3 arguments (in order):
//
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
//
// It should return the name of the elevator closest to the called floor ("left"/"right").
//
// In the case where both elevators are equally distant from the called floor,
// choose the elevator to the right.
const ClosestElevator = (left,call,right) => {
    if(call===right) {
        return "right"
    }else if(call===left){
        return "left"
    }else if ((call-right<call-left)||(left===right)){
        return "right"
    }else{
        return "left"
    }
}
// тест прошел но на полной проверке вышла ошибка
console.log(ClosestElevator(1,2,2))