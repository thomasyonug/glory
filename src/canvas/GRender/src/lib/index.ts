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

}


