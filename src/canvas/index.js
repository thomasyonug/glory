import theme             from './theme'
import lib               from './lib'
import * as animateCore  from './animate'

import {prototype}       from 'decorators'
import {autobind}        from 'core-decorators'


@prototype({
    ...theme,
    ...lib
})
export default class Canvas {
    canvasEl = null;
    ctx = null;

    constructor (canvas) {
        this.canvasEl = canvas
        this.ctx = canvas.getContext('2d')
    }


    @autobind
    animate(animate_name, ...rest) {
        return animateCore[animate_name]?.call(this, ...rest)
    }
}
