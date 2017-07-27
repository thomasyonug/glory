import React, {Component} from 'react'
import Styles from './e_role.scss'
import CSSModules from 'react-css-modules'

import {connect}  from 'react-redux'


import {} from 'prop-types'




@connect(
    state => {
        return {
            E_HP: state.glory.E_HP
        }
    },
    dispatch => {
        return {
        }
    }
)
@CSSModules(Styles)
export default class ERole extends Component {
    static propTypes = {
    }


    render () {
        return (
            <div styleName="wrapper">
                <span>
                    {this.props.E_HP}
                </span>
            </div>
        )
    }


}