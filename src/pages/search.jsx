import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './search.css'

import { routeHook } from 'decorators'

import {getRooms$, createRoomFn, joinRoom$, joinRoomFn} from 'ws'
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
        this.eventStore.push(
            getRooms$.subscribe(data => {
                this.props.setRooms(data)
            }),
            joinRoom$.subscribe(data => {
                this.props.joinRoom(data)
                window.location = '#/room'
            })
        )
    }



    render () {
        const {
            rooms
        } = this.props


        const roomRender = room => (
            <div 
                styleName="roomWrapper"
                key={room.host}>
                <div>
                    {room.name}
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
        this.eventStore.forEach(subscrition => {
            subscrition.unsubscribe()
        })
    }

    createRoom = () => {
        createRoomFn({
            name: 'fuck'
        }).subscribe()
    }

    joinRoom = (room) => {
        joinRoomFn({
            roomID: room.id
        }).subscribe()
    }

}