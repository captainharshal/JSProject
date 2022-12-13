class Rectangle extends Shape {
    constructor(color, borderWidth, length = 0, width = 0) {
        super(color, borderWidth)
        this.length = length;
        this.width = width;
    }

    //accessor property(getter)
    get getlength() {
        return this.length;
    }

    //accessor property(setter)
    /**
     * @param {any} newLength
     */
    set setlength(newLength) {
        this.length = newLength;
    }

    //accessor property(getter)
    get getwidth() {
        return this.width;
    }

    //accessor property(setter)
    /**
     * @param {any} newWidth
     */
    set setwidth(newWidth) {
        this.width = newWidth;
    }

    area() {
        return (this.length * this.width);
    }

}