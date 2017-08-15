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
            animateInfo: state.glory.animateInfo
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
        canvasRender: null
    }

    async componentWillReceiveProps (nextProps) {
        const {
            animate_name,
            payload
        } = nextProps.animateInfo

        if (this.props.animateInfo?.animate_name === animate_name) { return }
        await this.state.canvasRender.animate(animate_name, payload)
        this.props.endAnimate()
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
        const canvasRender = new Canvas(this.canvas)
        this.setState({
            canvasRender: canvasRender
        })
        canvasRender.galaxy()
    }
}