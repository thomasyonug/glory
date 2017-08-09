import {
} from 'reduxs/constant'


import { Observable } from 'rxjs/Observable';


export const summonAfter = (action$, store) => 
    action$.ofType('get_card_from_hand_to_battle')
    .filter(action => action.content.card.type === 'MONSTER')
    .map(action => {
        action.content.card.appearance?.(store, action)

        return {
            type: ''
        }
    })




export const summonAfterE = (action$, store) => 
    action$.ofType('get_card_from_e_hand_to_e_battle')
    .filter(action => action.content.card.type === 'MONSTER')
    .map(action => {
        action.content.card.appearance?.(store, action)

        return {
            type: ''
        }
    })
