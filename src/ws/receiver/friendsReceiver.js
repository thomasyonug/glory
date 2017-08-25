import Entity from './entity'



export class FriendsReceiver extends Entity{
    socket;

    constructor (friendsSocket) {
        super()
        this.socket = friendsSocket
    }


    initFriends (msg) {
        console.log(msg)
    }


}