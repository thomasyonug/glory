



export class FriendsApi {
    socket;

    constructor (FriendsApi) {
        this.socket = FriendsApi
    }

    addFriend (username) {
        this.socket.coreSocket.$emit('friends', {
            type: 'addFriend',
            content: {
                username
            }
        })
    }

    deleteFriend (username) {
        this.socket.coreSocket.$emit('friends', {
            type: 'deleteFriend',
            content: {
                username
            }
        })
    }

    // common (msg) {
    //     this.socket.coreSocket.$emit('chat', {
    //         type: 'common',
    //         content: msg
    //     }) 
    // }

    
}






