import {
    CLICK_BATTLE_FIELD,
    CLICK_E_BATTLE_FIELD,
    CLICK_E_ROLE,
    SET_ANIMATE_INFO,
    END_ANIMATE
} from 'reduxs/constant'

import * as inputConstant from 'reduxs/constant/input'


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
        const last  = xs.$lastOne()
        // const stateSnapshot = store.getState()
        if (
            (first.type === CLICK_BATTLE_FIELD) && 
            (last.type === CLICK_E_ROLE)
        ) {
            return {
                glory: 'attack',
                content: {
                    fromIndex: first.content.index,
                    toIndex: 'e_role'
                },
                xs
            }
        }

        if (
            (first.type !== CLICK_BATTLE_FIELD) ||
            (last.type  !== CLICK_E_BATTLE_FIELD)
        ) { return unActiveAll }

        return {
            glory: 'attack',
            content: {
                fromIndex: first.content.index,
                toIndex: last.content.index
            },
            xs
        }

    })
    .filter(arg => arg.glory === 'attack')
    //触发 trigger
    .map(arg => {
        const list = store.getState().glory.attackBeforeTriggerList
        let pass = true
        for (let trigger of list) {
            if (!trigger(arg, store)) {
                pass = false
            }
        }
        if (pass) {
            return arg
        } else {
            return false
        }
    })
    .filter(arg => arg)
    .do(arg => store.dispatch(new window.Transer({
        type: SET_ANIMATE_INFO,
        content: {
            animate_name: 'defaultAttack',
            payload: {
                xs: arg.xs
            }
        }
    })))
    .do(arg => store.dispatch({
        bone: true,
        passType: END_ANIMATE
    }))
    .switchMap(arg => action$.ofType(END_ANIMATE).mapTo(arg))
    .do(arg => store.dispatch({
        sleepingPill: true
    }))
    .map(arg => arg)

