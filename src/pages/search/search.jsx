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
        this.state = {
        }
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
                {rooms.map((room, index) => 
                    <div key={index}>
                        {roomRender(room)}
                    </div>)}

                <button onClick={this.createRoom}>create a room</button>
                <button onClick={this.arrengement}>go to arrenge card group</button>
            </div>
        )
    }



    componentWillUnmount() {
    }

    createRoom = () => {
        
        const dialogContentRender = (dialogContext) => {
            return (
                <div onClick={dialogContext.warning}>
                    <input
                        type="text" 
                        placeholder="room name"
                        onKeyDown={dialogContext.enterHandle}
                        value={dialogContext.state.roomName || ""}
                        ref={input => dialogContext.input = input}
                        onChange={(e) => dialogContext.setState({roomName: e.target.value})}
                    />
                </div>
            )
        } 
        this.$dialog(dialogContentRender, function(){this.input.focus()})
        .then(state => {
            if (!state.roomName) {
                return this.createRoom()
            }
            this.$ws.roomApi.createRoom({
                roomName: state.roomName
            })
            window.location = '#/room'
        })
        .catch(err => {}) 
    }

    joinRoom = room => {
        this.$ws.roomApi.joinRoom(room)
        window.location = '#/room'
    }

    arrengement = () => {
        window.location = '#/arrengement'
    }

}