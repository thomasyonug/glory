import {
    NEXT_ROUND,
    ROUND_NAME_PLAY
} from 'reduxs/constant'

import beforePlayRound from './beforePlayRound'

import {
    nextRoundStateMap
} from 'reduxs/reducer/god'


export default store => next => action => {
    if (action.type !== NEXT_ROUND) { return next(action) }

    const currentRoundState = store.getState().god.roundState
    const nextRoundState = nextRoundStateMap.get(currentRoundState)



    switch (nextRoundState) {
        case ROUND_NAME_PLAY:
            return beforePlayRound(store)(next)(action)
        default:
            return next(action)
    }
}


