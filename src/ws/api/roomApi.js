

export class RoomApi {
    socket;

    constructor (roomSocket) {
        this.socket = roomSocket
    }


    createRoom = msg => {
        this.socket.coreSocket.$emit('room', {
            type: 'create',
            content: msg
        })
    }

    roomList = () => {
        this.socket.coreSocket.$emit('room', {
            type: 'roomList'
        })
    }

    joinRoom = room => {
        this.socket.coreSocket.$emit('room', {
            type: 'join',
            content: room
        })
    }

}






