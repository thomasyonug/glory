import {
    UNACTIVE_HANDCARD,
    SUMMONENABLE_BATTLEFIELD,
    UNACTIVE_BATTLE_FIELD
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
}



export default {
    unActiveAll
}