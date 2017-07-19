import React, {Component} from 'react'
import Styles from './cardCore.css'
import CSSModules from 'react-css-modules'
import {object} from 'prop-types'




@CSSModules(Styles)
export default class CardFace extends Component {
    static propTypes = {
        card: object
    }


    render () {
        const {
            card
        } = this.props


        return (
            <div styleName='cardFace'>
                <h3 styleName="head">
                    {card.cardName}
                </h3>
                <div styleName="describe">
                    {card.describe}
                </div>
            </div>
        )
    }
}