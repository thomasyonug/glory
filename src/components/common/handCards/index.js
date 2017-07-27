import React, {Component} from 'react'
import Styles from './handCards.css'
import CSSModules from 'react-css-modules'
import {CardFace} from 'components/common/card'

import {connect}  from 'react-redux'


import {autobind} from 'core-decorators'

import {roundCtrl} from 'decorators'
import {
    ROUND_NAME_PLAY,
    CLICK_HAND_CARD,
    SPELL_HANDCARD
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
                glory: CLICK_HAND_CARD,
                content: {
                    index
                }
            }),

            _spell: (index, effect) => dispatch({
                glory: SPELL_HANDCARD,
                content: {
                    index
                },
                effect
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
                    return (
                        <li styleName='cardWrapper' key={index}>
                            <div style={{
                                border: (activeIndex === index && active) ? '1px solid green' : ''
                            }}>
                                <CardFace 
                                    onClick={() => this.click(index)}
                                    card={card}
                                    slot={
                                        card.type === 'MAGIC' ? 
                                        <button onClick={() => this.spell(index, card.effect)}>spell</button>
                                        :
                                        <div></div>
                                    }
                                >
                                    {index}
                                </CardFace>
                            </div>
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
    click (index) {
        if (this.props.cards[index].type !== 'MONSTER') {return 0}
        this.props._clickHandcard(index)
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
    spell (index, effect) {
        this.props._spell(index, effect)
    }


}