import scene        from './scene'
import lib          from './lib'
import animate      from './animate'


import {prototype}  from 'decorators'


@prototype({
    ...scene,
    ...lib,
    ...animate
})
export default class Canvas {
    canvas = null;


    constructor (canvas) {
        this.canvas = canvas
    }
}
