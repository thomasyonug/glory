import React, {Component} from 'react'
import Styles from './handCards.css'
import CSSModules from 'react-css-modules'
import {CardFace} from 'components/common/card'

import {connect}          from 'react-redux'


import {autobind} from 'core-decorators'

import {roundCtrl} from 'decorators'
import {
    ROUND_NAME_PLAY
} from 'reduxs/constant'

@connect(
    state => {
        return {
        }
    },
    dispatch => {
        return {
            _summon: index => dispatch(new window.Transer({
                glory: 'get_card_from_hand_to_battle', 
                content: {
                    fromIndex: index, 
                    toIndex: 1
                }}
            ))
        }
    }
)
@CSSModules(Styles)
export default class HandCards extends Component {
    render () {
        const {
            cards
        } = this.props

        const cardFaceSlot = index => <button onClick={() => this.summon(index)}>summon</button>

        return (
            <ul styleName='cardsWrapper'>
                {cards.map((card, index) => {
                    return (
                        <li styleName='cardWrapper' key={index}>
                            <CardFace 
                                card={card}
                                slot={cardFaceSlot(index)}
                            >
                                {index}
                            </CardFace>
                        </li>
                    )
                })}
            </ul>
        )
    }

    @autobind
    @roundCtrl.methodCtrl({
        validateRound: [
            ROUND_NAME_PLAY
        ],
        illegalHandler (round) {
            return this.$dialogAuto(`in ${round} cant do this`)
        }
    })
    summon (index) {
        this.props._summon(index)
    }
}