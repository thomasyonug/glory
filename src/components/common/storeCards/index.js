import React, {Component} from 'react'
import Styles from './storeCards.scss'
import CSSModules from 'react-css-modules'

import {connect} from 'react-redux'
import {autobind} from 'core-decorators'

import {
    CLICK_STORE_CARD
} from 'reduxs/constant'





@connect(
    state => {
        return {
        }
    },
    dispatch => {
        return {
            _click: content => dispatch({
                type: CLICK_STORE_CARD,
                content
            })
        }
    }
)
@CSSModules(Styles)
export default class StoreCards extends Component {



    render(){
        const {
            cards
        } = this.props


        return (
            <div 
                styleName={cards.length>20 ? 'storeCardStack' : (cards.length>1 ? 'storeCardStack_less' : 'storeCardStack_single')}
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