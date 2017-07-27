import React, {Component} from 'react'
import Styles from './role.scss'
import CSSModules from 'react-css-modules'

import {connect}  from 'react-redux'


import {} from 'prop-types'




@connect(
    state => {
        return {
            HP: state.glory.HP
        }
    },
    dispatch => {
        return {
        }
    }
)
@CSSModules(Styles)
export default class Role extends Component {
    static propTypes = {
    }


    render () {
        return (
            <div styleName="wrapper">
                {this.props.HP}
            </div>
        )
    }


}