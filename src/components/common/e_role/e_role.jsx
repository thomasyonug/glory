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
            E_HP: state.glory.E_HP
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
        return (
            <div 
                styleName="wrapper"
                onClick={this.click}
                >
                <span>
                    {this.props.E_HP}
                </span>
            </div>
        )
    }


    @autobind
    click () {
        this.props._click()
    }


}