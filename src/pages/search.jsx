import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './search.css'

import { routeHook } from 'decorators'

import {getRooms$, createRoom$} from 'ws'
import {connect} from 'react-redux'
import {getRoomsActionCreator} from 'reduxs/actions'

@connect(
    state => ({
        rooms: state.rooms
    }),
    dispatch => ({
        getRoom: content => dispatch(getRoomsActionCreator(content))
    })
)
@routeHook
@CSSModules(styles)
export default class Search extends Component{
    constructor(props) {
        super()
        this.state = {
            rooms: {}
        }
    }
    componentDidMount () {
        getRooms$.subscribe(data => {
            this.props.getRoom(data)
        })
    }



    render () {





        const roomRender = room => (
            <div 
                styleName="roomWrapper"
                key={room.host}>
                {room.name}
            </div>
        )


        return (
            <div>
                {Object.keys(this.state.rooms).map(key => this.state.rooms[key]).map(roomRender)}
                <button onClick={this.createRoom}>create a room</button>
            </div>
        )
    }

    createRoom = () => {
        
    }


    componentWillUnmount() {
    }

}