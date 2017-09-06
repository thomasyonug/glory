import {
} from 'reduxs/constant'


import { Observable } from 'rxjs/Observable';


export const coverAfter = (action$, store) => 
    action$.ofType('get_card_from_hand_to_trap_battle')
    .map(action => {
        const {
            card
        } = action.content

        card?.setTrigger?.(store, action)

        return {
            type: 'setTrigger finish'
        }
    })




export const coverAfterE = (action$, store) => 
    action$.ofType('get_card_from_e_hand_to_e_battle')
    .filter(action => action.content?.card?.type === 'MONSTER')
    .map(action => {
        action.content.card.setTrigger?.(store, action)

        return {
            type: 'setETrigger finish'
        }
    })