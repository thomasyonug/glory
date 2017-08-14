import GRender from '../lib/index'

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas')
canvas.width = canvas.clientWidth
canvas.height = canvas.clientHeight




const app = new GRender(canvas, canvas.getContext('2d'))

app.addSprite(new GRender.Sprite(
    'test',
    function (ctx, now, preNow) {
        this.x = 1
    },
    (ctx, now, preNow) => {
        ctx.save()
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = '#f74';
        for (let i = 0; i < 100; i++) {
            ctx.beginPath();
            ctx.arc(
                i*3 + Math.random()*300/i,
                i*3 + Math.random()*300/i,
                i/50*20,
                0,
                Math.PI*2
            );
            ctx.globalAlpha = i/70;
            ctx.fill();
        }
        ctx.restore()
    }
))


const stop = app.render()



setTimeout(() => {
    stop()
}, 10000)


