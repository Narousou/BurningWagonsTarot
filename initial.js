

class Card {

    constructor(src,qt,upright,reversed) {
        this.img = Image();
        this.src = src;
        
        this.qt = qt;
        this.upright = upright;
        this.reversed = reversed;
    }

    createImage()
    {
        var img = new Image();
        img.src = this.src;
    }

    createDesc()
    {
        let a = document.createTextNode(this.qt);
    }

}