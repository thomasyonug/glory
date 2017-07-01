import Entity from './entity'


export class ErrorReceiver extends Entity{
    socket;


    constructor (rootSocket) {
        super()
        this.socket = rootSocket
    }
    
}