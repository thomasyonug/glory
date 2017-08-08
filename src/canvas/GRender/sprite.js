



class Sprite {

    behavior = [];
    paint;

    constructor () {

    }

    update (ctx) {
        for (let i of this.behavior) {
            this.behavior[i](ctx)
        }
    }
}

export default Sprite