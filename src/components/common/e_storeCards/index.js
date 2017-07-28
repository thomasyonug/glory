import React, {Component} from 'react'
import Styles from './e_storeCards.css'
import CSSModules from 'react-css-modules'


import {connect} from 'react-redux'
import {autobind} from 'core-decorators'

import {
    CLICK_E_STORE_CARD
} from 'reduxs/constant'



@connect(
    state => {
        return {
        }
    },
    dispatch => {
        return {
            _click: content => dispatch({
                type: CLICK_E_STORE_CARD,
                content
            })
        }
    }
)
@CSSModules(Styles)
export default class E_storeCards extends Component {
    render(){
        const {
            cards
        } = this.props


        return (
            <div 
                styleName={cards.length>20 ? 'e_storeCardStack' : (cards.length>1 ? 'e_storeCardStack_less' : 'e_storeCardStack_single')}
                onClick={this.click}
                >
                {cards.length}
            </div>
        )
    }

    @autobind
    click () {
        this.props._click()
    }
}