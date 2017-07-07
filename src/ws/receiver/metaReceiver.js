import {store} from '@/index'




export class MetaReceiver {
    socket;

    constructor (rootSocket) {
        this.socket = rootSocket
    }

    
    startListen () {
        this.socket.coreSocket.$on('meta', msg => {
            this[msg.type].call(this, msg)
        })
    }


    connectSuccess (msg) {
        window.location = '#/search'
    }

    quitRoomSuccess (msg) {
        window.location = '#/search'
    }

}