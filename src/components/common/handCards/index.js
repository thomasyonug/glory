import React, {Component} from 'react'
import Styles from './handCards.scss'
import CSSModules from 'react-css-modules'
import {CardFace} from 'components/common/card'

import {connect}  from 'react-redux'


import {autobind} from 'core-decorators'

import {roundCtrl} from 'decorators'
import {
    ROUND_NAME_PLAY,
    CLICK_HAND_CARD,
} from 'reduxs/constant'





@connect(
    state => {
        return {
            active: state.handCards.active,
            activeIndex: state.handCards.activeIndex
        }
    },
    dispatch => {
        return {
            _clickHandcard: index => dispatch({
                type: CLICK_HAND_CARD,
                content: {
                    index
                }
            })
        }
    }
)
@CSSModules(Styles)
export default class HandCards extends Component {
    render () {
        const {
            cards,
            active,
            activeIndex
        } = this.props

        // const cardFaceSlot = index => <button onClick={() => this.summon(index)}>summon</button>

        return (
            <ul styleName='cardsWrapper'>
                {cards.map((card, index) => {
                    if (card) {
                        return (
                            <li styleName='cardWrapper' key={index}>
                                <div style={{
                                    border: (activeIndex === index && active) ? '2px solid red' : ''
                                }}>
                                    <CardFace 
                                        onClick={() => this.click(index)}
                                        card={card}
                                    >
                                        {index}
                                    </CardFace>
                                </div>
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
    @roundCtrl.methodCtrl({
        validateRound: [
            ROUND_NAME_PLAY
        ],
        illegalHandler (round) {
            return this.$dialogAuto(`in ${round} cant do this`)
        }
    })
    click (index) {
        this.props._clickHandcard(index)
    }


    // @autobind
    // @roundCtrl.methodCtrl({
    //     validateRound: [
    //         ROUND_NAME_PLAY
    //     ],
    //     illegalHandler (round) {
    //         return this.$dialogAuto(`in ${round} cant do this`)
    //     }
    // })
    // spell (index, effect) {
    //     this.props._spell(index, effect)
    // }


}