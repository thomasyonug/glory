import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './search.scss'

import { routeHook } from 'decorators'

import {connect} from 'react-redux'
import {setRoomsActionCreator, joinRoomActionCreator} from 'reduxs/actions'
import {autobind} from 'core-decorators'

import FriendScol   from 'components/common/friendscol'
import { Button } from 'antd'






@connect(
    state => ({
        rooms: state.room.rooms,
        chat: state.chat
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
            rooms,
            chat
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
                    <Button onClick={event => this.joinRoom(room)}>加入</Button>
                </div>
            </div>
        )


        return (
            <div styleName="reachRoom">
                <Button styleName="backBtn" onClick={this.back}>返回</Button>
                {rooms.map((room, index) => 
                    <div key={index}>
                        {roomRender(room)}
                    </div>)}

                <Button onClick={this.createRoom}>create a room</Button>
                <Button onClick={this.arrengement}>go to arrenge card group</Button>

                <FriendScol
                    allFriends={chat.allFriends}
                    onlineFriends={chat.onlineFriends}
                ></FriendScol>
            </div>
        )
    }



    componentWillUnmount() {
    }

    @autobind
    createRoom () {
        
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
        .catch(err => {
            console.log(err)
        }) 
    }

    joinRoom = room => {
        this.$ws.roomApi.joinRoom(room)
        window.location = '#/room'
    }

    arrengement = () => {
        window.location = '#/arrengement'
    }

    back = () =>{
        window.location = '#/login'
    }

}