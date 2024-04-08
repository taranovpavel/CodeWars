// Given a point in a Euclidean plane (x and y),
// return the quadrant the point exists in: 1, 2, 3 or 4 (integer).
// x and y are non-zero integers,
// therefore the given point never lies on the axes.
const Quadrants = (x,y) =>{
    if ((x>0)&&(y>0)) {return 1}
    else if ((x<0)&&(y<0)) {return 3}
    else if (x>0) {return 4}
    else {return 2}
}
console.log(Quadrants(2,-4))