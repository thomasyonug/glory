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
    .pairwise()
    .map(xs => {

        const first = xs.$firstOne()
        const last  = xs.$lastOne()
        const stateSnapshot = store.getState()

        //校验点击类型
        if (
            (first.type !== CLICK_HAND_CARD) ||
            (last.type  !== CLICK_BATTLE_FIELD_EMPTY)
        ) { return unActiveAll }

        //校验是否可summon
        if (
            (stateSnapshot.handCards.cards[first.content.index].type !== 'MONSTER') ||
            (stateSnapshot.battleField.firstAreaCards[last.content.index] !== null)
        ) { return unActiveAll }

        //触发summon trigger
        const list = store.getState().glory.summonBeforeTriggerList
        let pass = true
        for(let trigger of list) {
            if (!trigger(arg, store)) {
                pass = false
            }
        }
        if (!pass) { return {type: ''} } 


        //召唤
        return new window.Transer({
            glory: 'get_card_from_hand_to_battle',
            content: {
                fromIndex: first.content.index,
                toIndex: last.content.index
            }
        })
    })


