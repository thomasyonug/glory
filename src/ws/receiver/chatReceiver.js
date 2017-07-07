import Entity from './entity'
import {store} from '@/index'


export class ChatReceiver extends Entity{
    socket;


    constructor (chatSocket) {
        super()
        this.socket = chatSocket
    }
    

    newMsg (msg) {
        store.dispatch({
            type: 'PUSH_INFO',
            content: msg
        })
    }
}