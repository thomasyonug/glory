import React, {Component} from 'react'
import Styles from './cardCore.scss'
import CSSModules from 'react-css-modules'



import {func} from 'prop-types'

@CSSModules(Styles)
export default class CardBack extends Component {
    static propTypes = {
        onClick: func
    }


    render () {

        const {
            onClick
        } = this.props


        return (
            <div styleName='cardBack' onClick={onClick}>CardBack</div>
        )
    }
}