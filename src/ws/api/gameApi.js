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

    arrengement_addCardGroup ({groupName}) {
        this.socket.coreSocket.$emit('game', {
            type: 'arrengement_addCardGroup',
            content: {
                groupName
            }
        })
    }


}






