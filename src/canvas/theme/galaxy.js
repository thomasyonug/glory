import {random} from '../util'

class Star {
    radius       = null
    orbitX       = null
    orbitY       = null
    timePassed   = null
    speed        = null
    alpha        = null
    canvas2      = null
    constructor ({
        w,
        h,
        maxStars,
        canvas2
    }) {
        this.orbitRadius = random(w / 2 - 50);
        this.radius = random(100, this.orbitRadius) / 10;
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 100000;
        this.alpha = random(2, 10) / 10;
        this.canvas2 = canvas2
    }

    draw (ctx) {
        const x = Math.sin(this.timePassed + 1) * this.orbitRadius + this.orbitX,
              y = Math.cos(this.timePassed) * this.orbitRadius / 2 + this.orbitY,
              twinkle = random(10);

        if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(this.canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed;
    }
}


export default function () {
    let canvas = this.canvasEl,
        ctx = canvas.getContext('2d'),
        w = canvas.width,
        h = canvas.height,
        hue = 217,
        stars = [],
        maxStars = 1400,
        renderCount = 0

    // Cache gradient
    const canvas2 = document.createElement('canvas'),
            ctx2 = canvas2.getContext('2d');

    canvas2.width = 100;
    canvas2.height = 100;
    const half = canvas2.width / 2,
            gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();
    // End cache
    for (var i = 0; i < maxStars; i++) {
        stars.push(new Star({
            w,h,maxStars,canvas2
        }))
    }

    function animation() {
        renderCount += 1
        if (renderCount % 10 !== 0) {
            return window.requestAnimationFrame(animation);
        }
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
        ctx.fillRect(0, 0, w, h)

        ctx.globalCompositeOperation = 'lighter';
        for (var i = 1, l = stars.length; i < l; i++) {
            stars[i].draw(ctx);
        };

        window.requestAnimationFrame(animation);
    }

    animation();
}