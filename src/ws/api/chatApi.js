



export class ChatApi {
    socket;

    constructor (chatSocket) {
        this.socket = chatSocket
    }


    common (msg) {
        this.socket.coreSocket.$emit('chat', {
            type: 'common',
            content: msg
        }) 
    }

    
}






