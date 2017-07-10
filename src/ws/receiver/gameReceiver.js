import Entity from './entity'


export class GameReceiver extends Entity{
    socket;


    constructor (gameSocket) {
        super()
        this.socket = gameSocket
    }


    start (msg) {
        window.location = '#/start'
    }

    arrengement_addCardGroup_success (msg) {
        console.log(msg, 'succcccc')
    }
    
}