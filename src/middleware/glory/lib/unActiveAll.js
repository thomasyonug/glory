import {
    UNACTIVE_HANDCARD,
    SUMMONENABLE_BATTLEFIELD,
    UNACTIVE_BATTLE_FIELD,
    UNACTIVE_ATTACKABLE_E_BATTLEFIELD,
    TRAPENABLE_BATTLEFIELD
} from 'reduxs/constant'


function unActiveAll (store, next, action) {
    store.dispatch({
        type: UNACTIVE_HANDCARD
    })
    store.dispatch({
        type: SUMMONENABLE_BATTLEFIELD
    })
    store.dispatch({
        type: UNACTIVE_BATTLE_FIELD
    })
    store.dispatch({
        type: UNACTIVE_ATTACKABLE_E_BATTLEFIELD
    })
    store.dispatch({
        type: TRAPENABLE_BATTLEFIELD
    })
}



export default {
    unActiveAll
}