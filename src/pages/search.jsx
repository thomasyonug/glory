import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './search.css'

import { routeHook } from 'decorators'

import {connect} from 'react-redux'
import {setRoomsActionCreator, joinRoomActionCreator} from 'reduxs/actions'








@connect(
    state => ({
        rooms: state.room.rooms
    }),
    dispatch => ({
        setRooms: content => dispatch(setRoomsActionCreator(content)),
        joinRoom: content => dispatch(joinRoomActionCreator(content))
    })
)
@routeHook
@CSSModules(styles)
export default class Search extends Component{
    constructor(props) {
        super()
        this.state = {}
        this.eventStore = []
    }
    componentDidMount () {
        this.$ws.roomApi.roomList()
    }



    render () {
        const {
            rooms
        } = this.props


        const roomRender = room => (
            <div 
                styleName="roomWrapper"
                key={room.roomId}>
                <div>
                    {room.roomName}
                </div>
                <div>
                    host: {room.host}
                </div>
                <div>
                    guest: {room.guests.map((item, index) => <span key={index}>{item}</span>) || 'none'}
                </div>
                <div>
                    <button onClick={event => this.joinRoom(room)}>加入</button>
                </div>
            </div>
        )


        return (
            <div>
                {rooms.map(room => roomRender(room))}
                <button onClick={this.createRoom}>create a room</button>
                <button onClick={this.leaveRoom}>leave a room</button>
            </div>
        )
    }



    componentWillUnmount() {
        // this.eventStore.forEach(subscrition => {
        //     subscrition.unsubscribe()
        // })
    }

    createRoom = () => {
        this.$ws.roomApi.createRoom({
            roomName: 'fucking room name'
        })
    }

    joinRoom = room => {
        this.$ws.roomApi.joinRoom(room)
    }

}