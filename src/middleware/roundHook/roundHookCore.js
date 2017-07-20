import {
    NEXT_ROUND
} from 'reduxs/constant'



export default store => next => action => {
    if (action.type === NEXT_ROUND && action.beforeRound) {
        return action.beforeRound(store).then(result => next(result))
    } else {
        return next(action)
    }
}


