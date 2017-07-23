import {
    UNACTIVE_HANDCARD,
    SUMMONENABLE_BATTLEFIELD
} from 'reduxs/constant'


function CLICK_RIGHT_DOCUMENT (store, next, action) {
    store.dispatch({
        type: UNACTIVE_HANDCARD
    })

    store.dispatch({
        type: SUMMONENABLE_BATTLEFIELD
    })

    return next({
        type: CLICK_RIGHT_DOCUMENT.name
    })
}



export default {
    CLICK_RIGHT_DOCUMENT
}