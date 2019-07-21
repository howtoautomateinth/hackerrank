class Polygon{
    constructor(sides) {
        this.sides = sides;
    }
    perimeter() {
        return this.sides.reduce(function (a, b) { return a + b; });
    }
}