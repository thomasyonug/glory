import React, {Component} from 'react'
import Styles from './handCards.css'
import CSSModules from 'react-css-modules'
import {CardBack} from 'components/common/card'

@CSSModules(Styles)
export default class HandCards extends Component {
    render () {
        const {
            cards
        } = this.props
        return (
            <ul styleName='cardsWrapper'>
                {cards.map((card, index) => {
                    return (
                        <li styleName='cardWrapper' key={index}>
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