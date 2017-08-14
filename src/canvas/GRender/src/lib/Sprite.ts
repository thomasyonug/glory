export type update = (ctx: CanvasRenderingContext2D, now: number, preNow: number) => void
export type draw = (ctx: CanvasRenderingContext2D, now: number, preNow: number) => void




export default class Sprite {



    constructor (
        public name: string,
        public update: update,
        public draw: draw
    ) {}



}