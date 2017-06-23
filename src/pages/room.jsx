import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './room.css'
import {connect} from 'react-redux'
import * as ac from 'reduxs/actions'

import {leaveRoomFn, joinRoom$} from 'ws'
import {joinRoomActionCreator} from 'reduxs/actions'

import { routeHook } from 'decorators'






@connect(
    state => {
        return {
            currentRoom: state.room.currentRoom
        }
    },
    dispatch => {
        return {
          updateRoom: content => dispatch(joinRoomActionCreator(content))
        }
    }
)
@routeHook
@CSSModules(styles)
export default class Room extends Component{
    constructor(props) {
        super(props)
        this.eventStore = []
    }
    componentDidMount () {
        this.eventStore.push(
            joinRoom$.subscribe(data => {
                console.log(data)
                this.props.updateRoom(data)
            })
        )
    }
    render () {
        const {currentRoom} = this.props



        return (
            <div>
                {currentRoom.guests.map((guest,index) => {
                    return (
                        <div key={index}>{guest}</div>
                    )
                })}
                <div>
                    <button onClick={this.exit}>退出</button>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        this.exit()
        this.eventStore.forEach(subscrition => {
            subscrition.unsubscribe()
        })
    }

    exit = () => {
        leaveRoomFn.subscribe()
        window.location = '#/search'
    }
}