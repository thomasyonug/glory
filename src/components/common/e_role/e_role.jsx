import React, {Component} from 'react'
import Styles from './e_role.scss'
import CSSModules from 'react-css-modules'

import {connect}  from 'react-redux'


import {} from 'prop-types'

import {autobind} from 'core-decorators'
import {
    CLICK_E_ROLE
} from 'reduxs/constant'


@connect(
    state => {
        return {
            E_HP: state.glory.E_HP,
            EBattleFieldCards: state.e_battleField.firstAreaCards
        }
    },
    dispatch => {
        return {
            _click: content => dispatch({
                type: CLICK_E_ROLE,
                content
            })
        }
    }
)
@CSSModules(Styles)
export default class ERole extends Component {
    static propTypes = {
    }


    render () {

        const {
            E_HP
        } = this.props
        

        return (
            <div 
                styleName="wrapper"
                onClick={this.click}
                >
                <span>
                    {E_HP}
                </span>
            </div>
        )
    }


    @autobind
    click () {
        const aliveNum = this.props.EBattleFieldCards.reduce((sum, item) => {
            return sum += item ? 1 : 0
        }, 0)
        
        if (!aliveNum) {this.props._click()}
    }


}