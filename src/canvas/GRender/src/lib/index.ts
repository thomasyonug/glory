import Sprite    from './Sprite'
import Stage     from './Stage'
import Loader    from './Loader'
import {applyMixins} from '../util/index'

export default class GRender implements Loader{
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

    public loadImg: (url: string) => Promise<HTMLImageElement> 



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

    
    public async drawImg (url: string): Promise<HTMLImageElement> {
        const imgEl = await this.loadImg(url)

        this.ctx.drawImage(imgEl, 0, 0, imgEl.width, imgEl.height, 0, 0, this.stage.width, this.stage.height)

        return imgEl
    }
}
applyMixins(GRender, [Loader]);

export {
    Sprite
}

