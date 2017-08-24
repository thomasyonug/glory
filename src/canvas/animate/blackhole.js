import {
  getElPosition
} from 'util'

import {
  Sprite
} from '../GRender/dist/lib'

export async function blackhole(payload) {
  const {
    ctx,
    gRender,
    canvasEl
  } = this

  const {
    xs,
    role
  } = payload

  // const {x, y} = xs.$lastOne().event

  // const width = canvasEl.width
  // const height = canvasEl.height

  // const offsetX = x - width/2
  // const offsetY = y - (height - 100)

  const DURATION = 3000

  // const stepX = offsetX / DURATION
  // const stepY = offsetY / DURATION

  // let movedX = 0, movedY = 0

  const width = canvasEl.width
  const height = canvasEl.height

  const halfScreenX = width/2
  const halfScreenY = height/2
  const {
    random, atan2, cos, sin, hypot
  } = Math

  let point = { x: halfScreenX, y: halfScreenY }
  let blackHolesize = 40
  let hue = 0, max = 200, stars = []
  function Star(){};

  window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame   ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();

  Star.prototype = {
    init(){
      this.hue = hue;
      this.alpha = 0;
      this.size = this.random(0, 4);
      this.x = this.random(0, width);
      this.y = this.random(0, height);
      this.speed = this.size * 0.05;
      this.updated = null;
      this.frame = 0;
      this.maxFrames = 50;
      return this;
    },
    draw(ctx){
      ctx.strokeStyle = `hsla(${this.hue}, 50%, 85%, ${this.alpha})`;
      ctx.beginPath();
      ctx.lineWidth = 0.5;
      ctx.arc(this.x, this.y, this.size, 0, 2 * 3.142);
      ctx.stroke();
      ctx.closePath();
    },
    update(){
      if(this.update){
        this.alpha *= 0.42;
        this.size += 4;
        this.frame ++;
        if(this.frame > this.maxFrames){
          this.reset();
        }
      } else if(this.distance(point.x, point.y) < (blackHolesize-16)){
        this.update = true;
      } else {
        let dx = point.x - this.x;
        let dy = point.y - this.y;
        let angle = atan2(dy, dx);

        this.alpha += .01;
        this.x += this.speed * cos(angle);
        this.y += this.speed * sin(angle);
        this.speed += 0.01;
      }
    },
    reset(){
      this.init();
    },
    distance(x, y){
      return hypot(x - this.x, y - this.y);
    },
    random(min, max) {
      return random() * (max - min) + min;
    }
  }
  function animate(ctx){
    ctx.fillStyle = `rgba(10,20,30, .3)`;
    ctx.fillRect(0, 0, width, height);
    stars.forEach((p) => {
      p.draw(ctx);
    });
    hue += 1;     
  
    window.requestAnimationFrame(animate);
  }

  return new Promise((resolve, rej) => {
     const startTime = Date.now()

    const blackhole = new Sprite('blackhole',
      (ctx, now, preNow) => {
        if (Date.now() - startTime > DURATION) {
          gRender.nextTick(stage => {
            gRender.removeSprite(blackhole)
          })
          resolve()
        }

        // movedX = (Date.now() - startTime)/DURATION * offsetX
        // movedY = (Date.now() - startTime)/DURATION * offsetY
      },
      (ctx, now, preNow) => {
        console.log(ctx)
        for(let i=0; i<2; i++){
          setTimeout(() => {
            let p = new Star().init();
            stars.push(p);
          }, i * 8);
        }
        console.log(ctx)
        animate(ctx);
        
      }
    )

    gRender.addSprite(blackhole)
  })
}