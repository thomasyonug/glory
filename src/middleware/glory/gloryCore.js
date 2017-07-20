import {
    // NEXT_ROUND
} from 'reduxs/constant'


import lib from './lib'

export default store => next => action => {
    const {
        glory
    } = action

    if (!glory) { return next(action) }


    return lib[glory](store, next, action)
}


