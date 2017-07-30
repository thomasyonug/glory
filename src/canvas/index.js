import theme        from './theme'
import lib          from './lib'
import animate      from './animate'


import {prototype}  from 'decorators'


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
