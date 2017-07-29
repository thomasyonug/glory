import {
    REFRESH
} from 'reduxs/constant'





function clearBefore (store, next, action) {

    return next({
        type: REFRESH
    })
}

export default {
    clearBefore
}