import CoreGuard from '../coreGuard'

import {
    ROUND_NAME_GET_CARD_REGULAR
} from 'reduxs/constant'



let preRoundState = undefined
export const roundGuard = new CoreGuard({
    cb (store) {
        const currentRoundState = store.getState().god.roundState
        if (currentRoundState === preRoundState) {
            return false
        }
        else {
            preRoundState = currentRoundState
            return true
        }
    }
})





roundGuard.addWork(function get_card_when_round_start(store) {
    const currentRoundState = store.getState().god.roundState

    if (currentRoundState !== ROUND_NAME_GET_CARD_REGULAR) { return }
        // store.dispatch({
        //     type: 
        // })

})