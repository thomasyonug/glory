import Sprite    from './Sprite'
import Stage     from './Stage'

export default class GRender {
    static Sprite = Sprite;

    public sprites: Sprite[] = [];
    public stage: Stage;

    constructor(
        public canvas: HTMLElement,
        public ctx: CanvasRenderingContext2D
    ) {
        Object.assign(this, {
            stage: new Stage(
                ctx, 
                this.sprites, 
                canvas.clientWidth, 
                canvas.clientHeight
            )
        })
    }

    public render(): () => void {
        return this.stage.render()
    }

    public addSprite(...sprite: Sprite[]): void {
        this.sprites.push(...sprite)
    }

    public removeSprite(sprite: Sprite): boolean {
        const index = this.sprites.findIndex(item => sprite === item)

        if (index > -1) {
            this.sprites.splice(index, 1)
            return true
        } else {
            return false
        }
    }

    public nextTick(fn: (stage: Stage) => void): void {
        this.stage.nextTick(fn)
    }

}

export {
    Sprite
}

