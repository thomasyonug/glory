import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './room.css'
import {connect} from 'react-redux'
// import * as ac from 'reduxs/actions'


import { routeHook } from 'decorators'






@connect(
    state => {
        return {
        }
    },
    dispatch => {
        return {
        }
    }
)
@routeHook
@CSSModules(styles)
export default class Room extends Component{

    constructor(props) {
        super(props)
        console.log('room build')
    }

    componentDidMount () {
    }

    render () {



        return (
            <div>room</div>
        )
    }

    componentWillUnmount() {
    }
}