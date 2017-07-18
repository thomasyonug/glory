import Entity from './entity'
import {store} from '@/index'
import {cardClassMap} from 'resource'



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

    arrengement_getUsingGroup (msg) {
        store.dispatch({
            type: 'SET_USINGGROUP',
            content: msg.content
        })
    }



    glory_initStoreCards (msg) {
        const {
            storeCards,
            e_storeCards,
        } = msg.content

        store.dispatch({
            type: 'SET_STORECARDS',
            content: storeCards.map(card => {
                const cardClass = cardClassMap.get(card.cardCode)
                return new cardClass()
            })
        })


        store.dispatch({
            type: 'SET_E_STORECARDS',
            content: e_storeCards.map(card => {
                const cardClass = cardClassMap.get(card.cardCode)
                return new cardClass()
            })
        })
    }

    glory_initGod (msg) {
        store.dispatch({
            type: 'INIT_GOD',
            content: msg.content
        })
    }

    glory_initAll (msg) {
        const {
            initStoreContent,
            initGodContent
        } = msg.content
        this.glory_initStoreCards(initStoreContent)
        this.glory_initGod(initGodContent)
    }
    
    glory_transfer (msg) {
        store.dispatch(msg.content.action)
    }

}