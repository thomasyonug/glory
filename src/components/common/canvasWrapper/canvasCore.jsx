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
        canvasRender: null,
        bgCanvasRender: null
    }

    async componentWillReceiveProps (nextProps) {
        const {
            animate_name,
            payload
        } = nextProps.animateInfo

        const {
            canvasRender,
            bgCanvasRender
        } = this.state



        // canvasRender.gRender.stage.backgroundEnable = false
        await canvasRender.animate(animate_name, payload)
        // canvasRender.gRender.stage.backgroundEnable = true

        this.props.endAnimate()
    }


    render () {
        return (
            <div>
                <canvas
                    ref={canvas => this.canvasBgEl = canvas}
                    styleName="bgCanvas"
                ></canvas>
                <canvas 
                    ref={canvas => this.canvasEl = canvas}
                    styleName="canvas"
                ></canvas>
            </div>
        )
    }

    componentDidMount () {
        const {
            canvasEl,
            canvasBgEl
        } = this
        const canvasRender = new Canvas(canvasEl)
        canvasEl.width = canvasEl.clientWidth
        canvasEl.height = canvasEl.clientHeight

        const bgCanvasRender = new Canvas(canvasBgEl)
        canvasBgEl.width = canvasBgEl.clientWidth
        canvasBgEl.height = canvasBgEl.clientHeight

        this.setState({
            canvasRender,
            bgCanvasRender
        })

        bgCanvasRender.gRender.drawImg(require('resource/img/galaxy.jpg'))
        
        canvasRender.gRender.render()
    }
}