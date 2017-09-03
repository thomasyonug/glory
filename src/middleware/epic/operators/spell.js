import * as inputConstant from 'reduxs/constant/input'

const {
    CLICK_HAND_CARD,
} = inputConstant

import {
    END_ANIMATE,
    SET_ANIMATE_INFO,
    CLICK_BATTLE_FIELD
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
    .do(xs => store.dispatch(unActiveAll))
    .map(xs => {
        const first = xs.$firstOne()
        const last  = xs.$lastOne()

        if (first.type !== CLICK_HAND_CARD) { return false }

        const stateSnapshot = store.getState()
        const firstCard = stateSnapshot.handCards.cards[first.content.index]
        const lastCard = stateSnapshot[
            last.type === CLICK_BATTLE_FIELD ?
            'battleField'
            :
            'e_battleField'
        ].firstAreaCards[last?.content?.index]


        if (
            (first.type !== CLICK_HAND_CARD) ||
            (firstCard.type !== 'MAGIC')
        ) { return false }


        if (
            !firstCard.isEffectTarget(xs, store, lastCard)
        ) { return false }

        return {
            xs,
            firstCard,
            lastCard
        }
    })
    .filter(arg => arg)
    .map(arg => {
        const list = store.getState().glory.magicTriggerList
        for(let trigger of list) {
            if (!trigger(arg, store)) { return Observable.empty() }
        }
        return arg
    })
    // .filter(arg => arg)
    //调用动画
    .do(({firstCard, xs}) => {
        store.dispatch(new window.Transer({
            type: SET_ANIMATE_INFO,
            content: {
                animate_name: firstCard.animate_name,
                payload: {
                    xs
                }
            }
        }))
    })
    //唤醒看门狗, 中间件通道关闭
    .do(arg => store.dispatch({
        bone: true,
        passType: END_ANIMATE
    }))
    //等待动画处理结束
    .switchMap(arg => action$.ofType(END_ANIMATE).mapTo(arg))
    //看门狗沉睡, 中间件通道开启
    .do(arg => store.dispatch({
        sleepingPill: true
    }))
    //发动效果
    .do(({firstCard, xs}) => firstCard.effect(xs, store))
    .map(x => ({type: 'spell finish'}))


