import {store} from '@/index'
import Entity from './entity'



export class MetaReceiver extends Entity{
    socket;

    constructor (rootSocket) {
        super()
        this.socket = rootSocket
    }

    


    connectSuccess (msg) {
        window.location = '#/search'
    }

    quitRoomSuccess (msg) {
        window.location = '#/search'
    }

}