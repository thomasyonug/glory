import theme             from './theme'
import lib               from './lib'
import * as animateCore  from './animate'
import GRender           from './GRender/dist/lib'

import {prototype}       from 'decorators'
import {autobind}        from 'core-decorators'


@prototype({
    ...theme,
    ...lib
})
export default class Canvas {
    canvasEl = null;
    ctx = null;
    gRender = null;
    constructor (canvas) {
        this.canvasEl = canvas
        this.ctx = canvas.getContext('2d')
        this.gRender = new GRender(canvas, this.ctx)
    }


    @autobind
    animate(animate_name, ...rest) {
        return animateCore[animate_name]?.call(this, ...rest)
    }
}
