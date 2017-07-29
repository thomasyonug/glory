import * as inputConstant from 'reduxs/constant/input'

const {
    CLICK_HAND_CARD,
    // CLICK_BATTLE_FIELD,
    // CLICK_STORE_CARD,
    // CLICK_ROLE,
    // CLICK_E_STORE_CARD,
    // CLICK_E_BATTLE_FIELD,
    // CLICK_E_ROLE,
} = inputConstant

import { Observable } from 'rxjs/Observable';


const unActiveAll = {
    glory: 'unActiveAll'
}

export default (action$, store) => 
    Observable.merge(
        ...Object.values(inputConstant).map(input => action$.ofType(input))
    )
    .pairwise()
    .map(xs => {
        const first = xs.$firstOne()
        // const last  = xs.$lastOne()

        if (first.type !== CLICK_HAND_CARD) { return unActiveAll }


        const stateSnapshot = store.getState()
        const firstCard = stateSnapshot.handCards.cards[first.content.index]
        if (
            (first.type !== CLICK_HAND_CARD) || 
            (firstCard.type !== 'MAGIC')
        ) { return unActiveAll }

        firstCard.effect(xs, store)

        return {
            glory: 'unActiveAll'
        }
    })
