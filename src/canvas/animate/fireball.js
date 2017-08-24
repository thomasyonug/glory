import {
    getElPosition
} from 'util'

import {
    Sprite
} from '../GRender/dist/lib'


export async function fireball(payload) {
    const {
        ctx,
        gRender,
        canvasEl
    } = this

    const {
        xs,
        role
    } = payload

    const {x, y} = xs.$lastOne().event
    // const { x, y } = getElPosition(targetEl)

    const width = canvasEl.width
    const height = canvasEl.height

    const offsetX = x - width/2
    const offsetY = y - (height - 100)

    const DURATION = 3000

    const stepX = offsetX / DURATION
    const stepY = offsetY / DURATION
    
    let movedX = 0, movedY = 0

    return new Promise((resolve, rej) => {

        const startTime = Date.now()

        const fireball = new Sprite('fireball',
            (ctx, now, preNow) => {
                if (Date.now() - startTime > DURATION) {
                    gRender.nextTick(stage => {
                        gRender.removeSprite(fireball)
                    })
                    resolve()
                }
                // movedX += stepX * (now - preNow)
                // movedY += stepY * (now - preNow)
                
                movedX = (Date.now() - startTime)/DURATION * offsetX
                movedY = (Date.now() - startTime)/DURATION * offsetY

            },
            (ctx, now, preNow) => {
                ctx.globalCompositeOperation = 'lighter';
                ctx.fillStyle = '#f74';
                if (role === 'e') { 
                    gRender.stage.mirror()
                }
                for (let i = 100; i > 0; i--) {
                    ctx.beginPath();
                    ctx.arc(
                        width/2 - ( Math.random() - 0.5 ) * 300 / i + movedX,
                        height - 100 - i * 3 + ( Math.random() - 0.5 ) * 300 / i + movedY,
                        i / 50 * 20,
                        0,
                        Math.PI * 2
                    );
                    ctx.globalAlpha = i / 70;
                    ctx.fill();
                }
            }
        )

        gRender.addSprite(fireball)

    })
}




