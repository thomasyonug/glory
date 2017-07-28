import * as inputConstant from 'reduxs/constant/input' 


import { Observable } from 'rxjs/Observable';

const {
    CLICK_BATTLE_FIELD_EMPTY,
    CLICK_HAND_CARD
} = inputConstant

const unActiveAll = {
    glory: 'unActiveAll'
}

export default (action$, store) => 
    Observable.merge(
        ...Object.values(inputConstant).map(input => action$.ofType(input))
    )
    .do(x => console.log(x))
    .pairwise()
    .map(xs => {

        const first = xs.$firstOne()
        const last  = xs.$lastOne()
        const stateSnapshot = store.getState()
        if (
            (first.type !== CLICK_HAND_CARD) ||
            (last.type  !== CLICK_BATTLE_FIELD_EMPTY)
        ) { return unActiveAll }


        if (
            (stateSnapshot.handCards.cards[first.content.index].type !== 'MONSTER') ||
            (stateSnapshot.battleField.firstAreaCards[last.content.index] !== null)
        ) { return unActiveAll }

        

        return new window.Transer({
            glory: 'get_card_from_hand_to_battle',
            content: {
                fromIndex: first.content.index,
                toIndex: last.content.index
            }
        })
    })


