import React, {Component} from 'react'
import Styles from './e_handCards.scss'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'


import {CardBack} from 'components/common/card'

import {autobind} from 'core-decorators'
import {
    CLICK_E_HAND_CARD
} from 'reduxs/constant'

@connect(
    state => {
        return {
        }
    },
    dispatch => {
        return {
            _click: index => dispatch({
                type: CLICK_E_HAND_CARD,
                content: index
            })
        }
    }
)
@CSSModules(Styles)
export default class E_HandCards extends Component {



    render () {
        const {
            cards
        } = this.props



        return (
            <ul styleName='e_cardsWrapper'>
                {cards.map((card, index) => {
                    if (card) {
                        return (
                            <li styleName='e_cardWrapper' key={index}>
                                <CardBack onClick={() => this.click(index)}>
                                    {index}
                                </CardBack>
                            </li>
                        )
                    } else {
                        return null
                    }
                })}
            </ul>
        )
    }

    @autobind
    click (index) {
        this.props._click(index)
    }


}