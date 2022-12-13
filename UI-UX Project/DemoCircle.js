class Circle extends Shape {
    constructor(color, borderWidth, radius = 0) {
        super(color, borderWidth)
        this.radius = radius;
    }

    //accessor property(getter)
    get getradius() {
        return this.radius;
    }

    //accessor property(setter)
    /**
     * @param {any} newRadius
     */
    set setradius(newRadius) {
        this.radius = newRadius;
    }

    area() {
        return (Math.PI * Math.pow(this.radius, 2));
    }
}