

export default class RoomApi {
    socket;

    constructor (rootSocket) {
        this.socket = rootSocket
    }


    createRoom = msg => {
        this.socket.coreSocket.$emit('room', {
            type: 'create',
            content: msg
        })
    }
}






