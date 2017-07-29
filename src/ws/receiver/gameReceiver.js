import Entity from './entity'
import {store} from '@/index'
import {cardClassMap} from 'resource'

import {
    MAX_HP,
    SET_HP,
    SET_E_HP
} from 'reduxs/constant'

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
    glory_initHandCards () {
        store.dispatch({
            glory: 'get_cards_from_store_to_hand',
            content: {
                start: -5
            }
        })
        store.dispatch({
            glory: 'get_cards_from_e_store_to_e_hand',
            content: {
                start: -5
            }
        })
    }

    glory_initGod (msg) {
        store.dispatch({
            type: 'INIT_GOD',
            content: msg.content
        })
    }

    glory_initGlory (msg) {
        store.dispatch({
            type: SET_HP,
            content: MAX_HP
        })

        store.dispatch({
            type: SET_E_HP,
            content: MAX_HP
        })
    }

    glory_clearBefore (msg){
        store.dispatch({
            glory: 'clearBefore'
        })
    }
    glory_initAll (msg) {
        const {
            initStoreContent,
            initGodContent
        } = msg.content
        this.glory_clearBefore()
        this.glory_initStoreCards(initStoreContent)
        this.glory_initHandCards()
        this.glory_initGod(initGodContent)
        this.glory_initGlory()
    }
    
    glory_transfer (msg) {
        store.dispatch(msg.content.action)
    }

}