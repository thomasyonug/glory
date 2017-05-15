import React, {Component} from 'react'
import Styles from './e_storeCards.css'
import CSSModules from 'react-css-modules'

@CSSModules(Styles)
export default class E_storeCards extends Component {
    render(){
        const {
            cards
        } = this.props


        return (
            <div styleName={cards.length>20 ? 'e_storeCardStack' : (cards.length>1 ? 'e_storeCardStack_less' : 'e_storeCardStack_single')}>
                {cards.length}
            </div>
        )
    }
}