import {
    UNACTIVE_HANDCARD
} from 'reduxs/constant'


function CLICK_RIGHT_DOCUMENT (store, next, action) {
    store.dispatch({
        type: UNACTIVE_HANDCARD
    })
}



export default {
    CLICK_RIGHT_DOCUMENT
}