import {
    Sprite
} from '../GRender/dist/lib'

import { random } from '../util'

const hue = 120

class Particle {
    x = null
    y = null
    coordinates = []
    coordinateCount = 5
    angle = Math.random() * Math.PI * 2
    speed = Math.random() * 9 + 1
    friction = 0.95
    gravity = 1
    hue = random(hue - 20, hue + 20)
    brightness = random(50, 80)
    alpha = 1
    decay = random(0.015, 0.03)



    constructor (x, y) {
        Object.assign(this, {
            x, y,
            coordinates: new Array(this.coordinateCount).fill(1).map(item => [x, y])
        })
    }

    update () {
        this.coordinates.pop()
        this.coordinates.unshift([this.x, this.y]) 
        this.speed *= this.friction
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed + this.gravity
        this.alpha -= this.decay
        return this.alpha <= this.decay
    }

    draw (ctx) {
        ctx.beginPath()
        ctx.moveTo(
            this.coordinates[this.coordinates.length - 1][0],
            this.coordinates[this.coordinates.length - 1][1]
        )
        ctx.lineTo(this.x, this.y)
        ctx.strokeStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${this.alpha})`
        ctx.stroke()
    }


}

class Firework {
    x = null
    y = null
    sx = null
    sy = null
    tx = null
    ty = null
    distanceToTarget = null
    distanceTraveled = null
    coordinates = []
    coordinateCount = 3
    angle = null
    speed = 2
    acceleration = 1.05
    brightness = Math.random() * 20 + 50
    // targetRadius = 1


    constructor (sx, sy, tx, ty) {
        this.x = sx
        this.y = sy
        Object.assign(this, {
            sx, sy,
            tx, ty,
            distanceToTarget: (sx - tx)**2 + (sy - ty)**2,
            distanceTraveled: 0,
            angle: Math.atan2(ty - sy, tx - sx)
        })

        while(this.coordinateCount--) {
            this.coordinates.push([this.x, this.y])
        }
    }

    update (index) {
        this.coordinates.pop()
        this.coordinates.unshift([this.x, this.y])
        this.speed += this.acceleration
        this.distanceTraveled = (this.sx - this.x)**2 + (this.sy - this.y)**2

        const vx = Math.cos(this.angle) * this.speed,
                vy = Math.sin(this.angle) * this.speed
        
        this.x += vx
        this.y += vy
    }

    draw (ctx) {
        if (this.distanceTraveled >= this.distanceToTarget) { return }

        ctx.beginPath()

        ctx.lineWidth = 10
        ctx.moveTo(
            this.coordinates[this.coordinates.length - 1][0], 
            this.coordinates[this.coordinates.length - 1][1]
        )
        ctx.lineTo(this.x, this.y)
        ctx.strokeStyle = `hsl(${hue},100%,${this.brightness}%)`
        ctx.stroke()
    }
}





export async function defaultAttack(payload) {
    const {
        ctx,
        gRender,
        canvasEl
    } = this

    const {
        xs,
        role
    } = payload

    const {x: tx, y: ty} = xs.$lastOne().event
    const {x: sx, y: sy} = xs.$firstOne().event
    // const { x, y } = getElPosition(targetEl)

    const width = canvasEl.width
    const height = canvasEl.height

    const DURATION = 3000

    return new Promise((resolve, rej) => {

        const startTime = Date.now()


        const firework = new Firework(sx, sy, tx, ty)
        const particles = []

        const defaultAttack = new Sprite('defaultAttack',
            (ctx, now, preNow) => {
                if (Date.now() - startTime > DURATION) {
                    gRender.nextTick(stage => {
                        gRender.removeSprite(defaultAttack)
                    })
                    resolve()
                }
                firework.update(ctx)

                if (particles.length) {
                    particles.forEach((particle, index) => {
                        if (particle.update()) {
                            particles.splice(index, 1)
                        }
                    })
                }


                if (firework.distanceTraveled >= firework.distanceToTarget) {
                    particles.push(...new Array(30).fill(1).map(() => new Particle(firework.tx, firework.ty)))
                }
            },
            (ctx, now, preNow) => {
                ctx.globalCompositeOperation = 'lighter';
                ctx.fillStyle = '#f74';

                firework.draw(ctx)

                if (particles.length) {
                    particles.forEach(particle => {
                        particle.draw(ctx) 
                    })
                }
            }
        )

        gRender.addSprite(defaultAttack)

    })
}




