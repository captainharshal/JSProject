class Triangle extends Shape {
    constructor(color, borderWidth, base = 0, height = 0) {
        super(color, borderWidth)
        this.base = base;
        this.height = height;
    }

    //accessor property(getter)
    get getbase() {
        return this.base;
    }

    //accessor property(setter)
    /**
     * @param {any} newBase
     */
    set setbase(newBase) {
        this.base = newBase;
    }

    //accessor property(getter)
    get getheight() {
        return this.height;
    }

    //accessor property(setter)
    /**
     * @param {any} newHeight
     */
    set setheight(newHeight) {
        this.height = newHeight;
    }

    area() {
        return (0.5 * this.base * this.height);
    }

}