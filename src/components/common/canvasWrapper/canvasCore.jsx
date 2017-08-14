import React, {Component} from 'react'
import Styles             from './canvasCore.scss'
import CSSModules         from 'react-css-modules'
import {connect}          from 'react-redux'
import {
    END_ANIMATE
} from 'reduxs/constant'

import Canvas from 'canvas'




@connect(
    state => {
        return {
            animate_name: state.glory.animate_name
        }
    },
    dispatch => {
        return {
            endAnimate: () => dispatch({
                type: END_ANIMATE
            })
        }
    }
)
@CSSModules(Styles)
export default class CanvasWrapper extends Component {
    state = {
        canvas: null
    }

    async componentWillReceiveProps (nextProps) {
        if (this.props.animate_name === nextProps.animate_name) { return }
        await canvas.animate(nextProps.animate_name)
        this.endAnimate()
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