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
  let blackHolesize = 100
  let hue = 0, max = 200, stars = []
  function Star(){};

  Star.prototype = {
    init(){
      this.hue = hue;
      this.alpha = 0;
      this.size = this.random(0, 4);
      this.x = this.random(0, width);
      this.y = this.random(0, height);
      this.speed = this.size * 0.05;
      return this;
    },
    draw(ctx){
      ctx.strokeStyle = `hsla(${this.hue}, 50%, 85%, ${this.alpha})`;
      ctx.beginPath();
      ctx.lineWidth = 0.5;
      ctx.arc(this.x, this.y, this.size, 0, 2 * 3.142);
      ctx.stroke();
      ctx.closePath();

      // Our Cursor Circle
      ctx.beginPath();
      ctx.strokeStyle = `rgb(20,20,20)`;
      ctx.lineWidth = 1;
      var gradient = ctx.createRadialGradient(point.x, point.y, blackHolesize/2, point.x, point.y, 2);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(0.9, '#212121');
      gradient.addColorStop(1, '#131416');
      ctx.fillStyle = gradient
      ctx.arc(point.x, point.y, blackHolesize/2, 0, Math.PI*2, false);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
      // Update the scene
      this.update();
    },
    update(){
      let dx = point.x - this.x;
      let dy = point.y - this.y;
      let angle = atan2(dy, dx);

      this.alpha += .01;
      this.x += this.speed * cos(angle);
      this.y += this.speed * sin(angle);
      this.speed += 0.05;
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
  return new Promise((resolve, rej) => {
    const startTime = Date.now()
    for(let i=0; i<max; i++){
        let p = new Star().init();
        stars.push(p);
    }
    const blackhole = new Sprite('blackhole',
      (ctx, now, preNow) => {
        if (Date.now() - startTime > DURATION) {
          gRender.nextTick(stage => {
            gRender.removeSprite(blackhole)
          })
          resolve()
        }       
      },
      (ctx, now, preNow) => {
        ctx.fillStyle = `rgba(10,20,30, .6)`;
        ctx.fillRect(0, 0, width, height);
         stars.forEach((px) => {
          px.draw(ctx);
        });
        hue += 1;
        blackHolesize ++;
      }
    )

    gRender.addSprite(blackhole)
  })
}