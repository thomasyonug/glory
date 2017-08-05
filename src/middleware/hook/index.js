import {
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_BATTLEFIELD
} from 'reduxs/constant'


import deadBefore from './deadBefore'
import attackBefore from './attackBefore'

export default store => next => action => {
    if (match_deadBefore(action)) {
        return deadBefore(store, next, action)
    } else if (match_attackBefore(action)) {
        return attackBefore(store, next, action)
    } else if (match_changeBefore(action)) {
        return false
    } else if (match_summonBefore(action)) {
        return false
    } else {
        return next(action)
    }
}



function match_deadBefore (action) {
    if (
        action.type === DROP_MONSTER_CARDS_FROM_BATTLEFIELD ||
        action.type === DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD 
    ) { return true }

    return false
}

function match_attackBefore (action) {
    if (
        action.glory === 'attack'
    ) { return true }

    return false
}

function match_changeBefore (action) {
    return false
}

function match_summonBefore (action) {
    return false
}