import Sprite from './Sprite'


export default class Stage {
    public background: (ctx: CanvasRenderingContext2D) => void;


    constructor(
        public ctx: CanvasRenderingContext2D,
        public sprites: Sprite[],
        public width: number,
        public height: number
    ){}


    render (): () => void {
        let running = true;
        let preNow = 0;

        const core = (now?:number) => {
            if (!running) { return }
            window.requestAnimationFrame(core)

            //保存now
            preNow = now;

            //清空canvas
            this.clear()

            //更新sprite
            for (let sprite of this.sprites) {
                sprite.update(this.ctx, now, preNow)
            }

            //绘制sprite
            for (let sprite of this.sprites) {
                sprite.draw(this.ctx, now, preNow)
            }
        }

        core()

        return function(): void{
            running = false
        }
    }

    clear () {
        if (this.background) {
            this.background(this.ctx)
        } else {
            const {ctx, width, height} = this
            ctx.save()
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'black';
            ctx.fillRect(0,0,width,height);
            // ctx.clearRect(0, 0, this.width, this.height)
            ctx.restore()
        }
    }

}