import React, {Component} from 'react'
import Styles from './role.scss'
import CSSModules from 'react-css-modules'

import {connect}  from 'react-redux'


import {
    CLICK_ROLE
} from 'reduxs/constant'

import {autobind} from 'core-decorators'


@connect(
    state => {
        return {
            HP: state.glory.HP
        }
    },
    dispatch => {
        return {
            _click: content => dispatch({
                type: CLICK_ROLE,
                content
            })
        }
    }
)
@CSSModules(Styles)
export default class Role extends Component {
    static propTypes = {
    }


    render () {
        return (
            <div 
                styleName="wrapper"
                onClick={this.click} 
                >
                {this.props.HP}
            </div>
        )
    }

    @autobind
    click () {
        this.props._click()
    }


}