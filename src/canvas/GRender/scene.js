import {prototype} from 'decorators'
import {Ticker} from './timer'


@prototype({
    
})
class Scene {
    canvasEl;
    ctx;
    sprites = [];
    ticker = new Ticker();

    constructor (canvasEl) {
        Object.assign(this, {
            ctx: canvasEl.getContext('2d'),
            canvasEl
        })
    }


    run () {
        let running = true

        const cycle = () => {
            if (!running) { return }
            window.requestAnimationFrame(cycle)

            //清空画布
            this.clear()

            //处理前置
            for (let i of this.ticker.queue) {
                const fn = this.ticker.queue.shift()
                fn.call(this)
            }

            //处理更新
            for (let i of this.sprites) {
                this.sprites[i].update(this.ctx)
            }

            //重绘
            for (let i of this.sprites) {
                this.sprites[i].paint(this.ctx)
            }

        }

        return function () {
            running = false
        }

    }

    add (sprite) {
        this.sprites.push(sprite)
    }

    remove (sprite) {
        this.sprites = this.sprites.$delete(item => item === sprite)
    }

    clear () {
        this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height)
    }
}


export default Scene