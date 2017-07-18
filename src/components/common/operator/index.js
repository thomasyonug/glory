import React, {Component} from 'react'
import Styles from './operator.css'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import Meta from './meta'

import {roundCtrl} from 'decorators'
import {autobind} from 'core-decorators'
import {
    ROUND_NAME_SILENT
} from 'reduxs/constant'

@connect(
    state => {
        return {
        }
    },
    dispatch => {
        return {
            _nextRound: content => dispatch(new window.Transer({type: 'NEXT_ROUND', content: ''}))
        }
    }
)
@CSSModules(Styles,{allowMultiple: true})
export default class Operator extends Component{
    constructor(){
        super()
        this.state = {
            mini: false
        }
    }
    render () {
        const {
            minify,
            nextRound
        } = this

        const {
            mini
        } = this.state


        



        return (
            <div styleName={`wrapper ${mini ? 'minify' : ''}`}>
                <Meta minifyClick={minify}></Meta>
                <button onClick={nextRound}>next round</button>
            </div>
        )
    }

    minify = () => {
        this.setState({mini: !this.state.mini})
    }
    




    @autobind
    @roundCtrl.methodCtrl({
        unvalidateRound: [
            ROUND_NAME_SILENT
        ]
    })
    nextRound () {
        this.props._nextRound()
    } 

}