import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './room.css'
import {connect} from 'react-redux'
// import * as ac from 'reduxs/actions'


import { routeHook } from 'decorators'






@connect(
    state => {
        return {
            roomInfo: state.room.currentRoom
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
    }

    componentDidMount () {
        this.$ws.roomApi.roomInfo()
    }

    render () {
        const roomInfo = this.props.roomInfo
        if (Object.keys(roomInfo).length !== 0) {
            return (
                <div styleName="currentRoom">
                    <h1>roomName: {roomInfo.roomName}</h1>
                    <div styleName="hostRoom">
                    <div>头像</div>
                    <div>{roomInfo.host}</div>
                    <div>房主</div>
                    </div>
                    {roomInfo.guests.map((guest,index) => {
                        return <div key={index} styleName="guestRoom">guest{index}: {guest}</div>
                    })}
                </div>
            )
        } else {
            return (
                <div>加载中</div>
            )
        }

    }

    componentWillUnmount() {
    }
}