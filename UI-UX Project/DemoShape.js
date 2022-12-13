class Shape {
    constructor(color = '', borderWidth = 0) {
        this.color = color;
        this.borderWidth = borderWidth;
    }

    //accessor property(getter)
    get getcolor() {
        return this.color;
    }

    //accessor property(setter)
    /**
     * @param {any} newColor
     */
    set setcolor(newColor) {
        this.color = newColor;
    }

    //accessor property(getter)
    get getBorderWidth() {
        return this.borderWidth;
    }

    //accessor property(setter)
    /**
     * @param {any} newborderWidth
     */
    set setBorderWidth(newborderWidth) {
        this.borderWidth = newborderWidth;
    }
}