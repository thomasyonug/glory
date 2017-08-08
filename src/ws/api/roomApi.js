

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

    roomInfo = () => {
        this.socket.coreSocket.$emit('room', {
            type: 'roomInfo'
        })
    }

    quitRoom = (roomID) => {
        this.socket.coreSocket.$emit('room', {
            type: 'quit',
            content: {
                roomID
            }
        })
    }

    hostInfo = () => {
        this.socket.coreSocket.$emit('room', {
            type: 'hostInfo'
        })
    }
}






