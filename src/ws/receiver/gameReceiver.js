import Entity from './entity'
import {store} from '@/index'

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

    arrengement_getCardGroups (msg) {
        store.dispatch({
            type: 'SET_CARDGROUPS',
            content: msg.content
        })
    }
    
}