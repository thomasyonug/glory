import Entity from './entity'


export class ErrorReceiver extends Entity{
    socket;


    constructor (errorSocket) {
        super()
        this.socket = errorSocket
    }
    
}