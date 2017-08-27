import Entity from './entity'
import {store} from '@/index'
import {
    PUSH_FRIEND_MSG
} from 'reduxs/constant'


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

    friendMsg (content) {
        const {
            msg,
            username
        } = content

        store.dispatch({
            type: PUSH_FRIEND_MSG,
            content: {
                username,
                msg
            }
        })

    }
}