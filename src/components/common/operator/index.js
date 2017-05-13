import React, {Component} from 'react'
import Styles from './operator.css'
import CSSModules from 'react-css-modules'
import Meta from './meta'
import {connect} from 'react-redux'

import * as ac from 'reduxs/actions'
import {test} from 'decorators'


// @connect(
//     state => {
//         return {
//             storeCards: state.storeCards
//         }
//     },
//     dispatch => {
//         return {
//             deleteStoreCards: content => dispatch(ac.deleteStoreCardsActionCreator(content)),
//             addHandCards: content => dispatch(ac.addHandCardsActionCreator(content))
//         }
//     }
// )
@test
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
            getCard
        } = this.props




        return (
            <div styleName={`wrapper ${mini ? 'minify' : ''}`}>
                <Meta minifyClick={minify}></Meta>
                <div styleName='cube' onClick={getCard}>get card</div>
                <div styleName='cube'>finish round</div>
            </div>
        )
    }


    minify = () => {
        this.setState({mini: !this.state.mini})
    }


}