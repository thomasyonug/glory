import theme        from './theme'
import lib          from './lib'
import animate      from './animate'
import GRender from 'canvas/GRender/dist'

import {prototype}  from 'decorators'

console.log(GRender)

@prototype({
    ...theme,
    ...lib,
    ...animate
})
export default class Canvas {
    canvas = null;

    constructor (canvas) {
        this.canvas = canvas
    }
}
