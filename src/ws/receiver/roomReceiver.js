import {store} from '@/index'
import Entity from './entity'




export class RoomReceiver extends Entity{
    socket;

    constructor (rootSocket) {
        super()
        this.socket = rootSocket
    }


    roomList (msg) {
        store.dispatch({
            type: 'SET_ROOMS',
            content: msg.content
        })
    }

    roomInfo (msg) {
        store.dispatch({
            type: 'SET_ROOM',
            content: msg.content
        })
    }



}