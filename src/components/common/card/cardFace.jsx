import React, {Component} from 'react'
import Styles from './cardCore.scss'
import CSSModules from 'react-css-modules'
// import {connect}          from 'react-redux'
// import {autobind} from 'core-decorators'



import {object, func, node} from 'prop-types'




@CSSModules(Styles)
export default class CardFace extends Component {
    static propTypes = {
        card: object,
        slot: node,
        onClick: func
    }


    render () {
        const {
            card,
            slot,
            onClick
        } = this.props


        return (
            <div styleName='cardFace' onClick={onClick}>
                 <h3 styleName="">
                    {card.cardName}
                </h3>
                <div styleName="">
                    {card.describe}
                </div>
                <div>
                    {slot}
                </div> 
            </div>
        )
    }


}