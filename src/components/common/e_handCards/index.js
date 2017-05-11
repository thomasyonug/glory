import React, {Component} from 'react'
import Styles from './e_handCards.css'
import CSSModules from 'react-css-modules'
import {CardBack} from 'components/common/card'


@CSSModules(Styles)
export default class E_HandCards extends Component {
    render () {
        const {
            cards
        } = this.props
        return (
            <ul styleName='e_cardsWrapper'>
                {cards.map((card, index) => {
                    return (
                        <li styleName='e_cardWrapper' key={index}>
                            <CardBack>
                                {index}
                            </CardBack>
                        </li>
                    )
                })}
            </ul>
        )
    }
}