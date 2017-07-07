import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './room.css'
import {connect} from 'react-redux'
// import * as ac from 'reduxs/actions'
import {RoomChat} from 'components/common/chats/roomChat'

import { routeHook } from 'decorators'






@connect(
    state => {
        return {
            roomInfo: state.room.currentRoom,
            msgs: state.chat.msgs
        }
    },
    dispatch => {
        return {
            clearMsgs: () => dispatch({type: 'CLEAR_MSGS'})
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
        const {
            roomInfo,
            msgs
        } = this.props

        if (Object.keys(roomInfo).length !== 0) {
            return (
                <div>
                    <h1>roomName: {roomInfo.roomName}</h1>
                    <h2>host: {roomInfo.host}</h2>
                    {roomInfo.guests.map((guest,index) => {
                        return <div key={index}>guest{index}: {guest}</div>
                    })}
                    <button onClick={() => this.quitRoom(roomInfo.roomID)}>quit room</button>
                    <RoomChat msgs={msgs}></RoomChat>
                </div>
            )
        } else {
            return (
                <div>加载中</div>
            )
        }

    }

    quitRoom = (roomID) => {
        this.$ws.roomApi.quitRoom(roomID)
    }
    componentWillUnmount () {
        this.props.clearMsgs()    
    }
}