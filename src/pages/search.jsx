import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './search.css'

import { routeHook } from 'decorators'

import {getRooms$, createRoomFn} from 'ws'
import {connect} from 'react-redux'
import {setRoomsActionCreator} from 'reduxs/actions'

@connect(
    state => ({
        rooms: state.room.rooms
    }),
    dispatch => ({
        setRooms: content => dispatch(setRoomsActionCreator(content))
    })
)
@routeHook
@CSSModules(styles)
export default class Search extends Component{
    constructor(props) {
        super()
        this.state = {
        }
    }
    componentDidMount () {
        getRooms$.subscribe(data => {
            this.props.setRooms(data)
        })
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
                    guest: {room.guest.map(item => <span>{item}</span>)}
                </div>
            </div>
        )


        return (
            <div>
                {Object.keys(rooms).map(roomName => roomRender(rooms[roomName]))}
                <button onClick={this.createRoom}>create a room</button>
            </div>
        )
    }

    createRoom = () => {
        createRoomFn({
            name: 'fuck'
        }).subscribe()
    }


    componentWillUnmount() {
    }

}