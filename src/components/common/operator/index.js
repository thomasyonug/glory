import React, {Component} from 'react'
import Styles from './operator.css'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import Meta from './meta'

@connect(
    state => {
        return {
        }
    },
    dispatch => {
        return {
            nextRound: content => dispatch(new window.Transer({type: 'NEXT_ROUND', content: ''}))
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

        const {
            nextRound
        } = this.props
        // const {
        //     currentRoundName
        // } = this.props




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
    

}