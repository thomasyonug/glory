import {store} from '@/index'




export class RoomReceiver {
    store;
    socket;

    constructor (rootSocket) {
        this.store = store
        this.socket = rootSocket
    }

    
    startListen () {
        this.socket.coreSocket.on('room', msg => {
            console.log(msg)
            // this.store.dispatch()
        })
    }

}