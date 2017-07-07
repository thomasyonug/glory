import {store} from '@/index'




export class RoomReceiver {
    socket;

    constructor (rootSocket) {
        this.socket = rootSocket
    }

    
    startListen () {
        this.socket.coreSocket.$on('room', msg => {
            this[msg.type].call(this, msg)
        })
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