import * as inputConstant from 'reduxs/constant/input'

const {
    CLICK_HAND_CARD,
} = inputConstant

import {
    END_ANIMATE,
    SET_ANIMATE
} from 'reduxs/constant'

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

        //失去焦点
        store.dispatch(unActiveAll)

        //调用动画
        store.dispatch({
            type: SET_ANIMATE,
            content: {
                animate_name: firstCard.animate_name
            }
        })

        //唤醒看门狗
        store.dispatch({
            bone: true,
            passType: END_ANIMATE
        })

        //等待动画结束
        return Observable.ofType(END_ANIMATE).map(action => ({
            firstCard,
            xs
        }))

    })
    .switchMap(param => {
        const {
            xs,
            firstCard
        } = param

        //看门狗沉睡
        store.dispatch({
           sleepingPill: true
        })

        //发动效果
        firstCard.effect(xs, store)

        return {
            type: 'spell finish'
        }
    })
