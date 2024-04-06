const TheFeast = (animal,food) => {
    return (animal[0] === food[0]) && (animal[animal.length - 1] === food[food.length - 1]);
}