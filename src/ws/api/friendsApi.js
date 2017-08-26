



export class FriendsApi {
    socket;

    constructor (friendsApi) {
        this.socket = friendsApi
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






