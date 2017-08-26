import Entity from './entity'
import {store} from '@/index'

import {
    INIT_FRIENDS
} from 'reduxs/constant'


export class FriendsReceiver extends Entity{
    socket;

    constructor (friendsSocket) {
        super()
        this.socket = friendsSocket
    }


    initFriends (msg) {
        store.dispatch({
            type: INIT_FRIENDS,
            content: msg.content
        })
    }


}