export class GameApi {
    socket;

    constructor (gameSocket) {
        this.socket = gameSocket
    }


    startGame () {
        this.socket.coreSocket.$emit('game', {
            type: 'start'
        })
    }


}






