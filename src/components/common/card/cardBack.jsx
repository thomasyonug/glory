import React, {Component} from 'react'
import Styles from './cardCore.css'
import CSSModules from 'react-css-modules'

@CSSModules(Styles)
export default class CardBack extends Component {
    render () {
        return (
            <div styleName='cardBack'>CardBack</div>
        )
    }
}