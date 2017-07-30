import React, {Component} from 'react'
import Styles from './canvasCore.scss'
import CSSModules from 'react-css-modules'


import Canvas from 'canvas'

@CSSModules(Styles)
export default class CanvasWrapper extends Component {
    state = {
        canvas: null
    }

    render () {

        return (
            <canvas 
                ref={canvas => this.canvas = canvas}
                styleName="canvas"
            ></canvas>
        )
    }

    componentDidMount () {
        const canvas = new Canvas(this.canvas)
        this.setState({
            canvas: canvas
        })
        canvas.galaxy()


    }
}