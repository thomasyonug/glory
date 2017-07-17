import React, {Component} from 'react'
import Styles from './operator.css'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import Meta from './meta'

@connect(
    state => {
        return {
            // currentRoundName: state.god.roundState
        }
    },
    dispatch => {
        return {
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
            minify
        } = this

        const {
            mini
        } = this.state

        // const {
        //     currentRoundName
        // } = this.props




        return (
            <div styleName={`wrapper ${mini ? 'minify' : ''}`}>
                <Meta minifyClick={minify}></Meta>
                <button>next round</button>
            </div>
        )
    }


    minify = () => {
        this.setState({mini: !this.state.mini})
    }
    

}