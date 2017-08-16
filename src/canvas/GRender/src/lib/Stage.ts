import Sprite from './Sprite'


export default class Stage {


    constructor(
        public ctx: CanvasRenderingContext2D,
        public sprites: Sprite[],
        public width: number,
        public height: number
    ){}



    public render (): () => void {
        let running = true;
        let preNow = 0;

        const core = (now?:number) => {
            if (!running) { return }
            window.requestAnimationFrame(core)

            //保存tick的长度，防止清空新加入的tick
            const length = this.nextTickSqueue.length
            //调用保存的tick函数
            for (let fn of this.nextTickSqueue) {
                fn(this)
            }
            //清空tick
            this.nextTickSqueue.splice(0, length)

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
            //保存now
            preNow = now;

            
        }

        core()

        return function(): void{
            running = false
        }
    }

    public clear (): void {
        if (this.background && this.backgroundEnable) {
            this.background(this.ctx)
        } else {
            const {ctx, width, height} = this
            ctx.save()
            ctx.clearRect(0, 0, this.width, this.height)
            ctx.restore()
        }
    }

    private nextTickSqueue: ((stage: this) => void)[] = [];

    public nextTick (fn: (stage: this) => void): void {
        this.nextTickSqueue.push(fn)
    }

    private background: (ctx: CanvasRenderingContext2D) => void;
    public setBackground(background: (ctx: CanvasRenderingContext2D)=> void): void {
        this.background = background 
    }

    public backgroundEnable: boolean = true;

}