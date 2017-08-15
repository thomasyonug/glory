const SLEEP = 'SLEEP'
const WATCH = 'WATCH'


let status = SLEEP
let passType = null


export default store => next => action => {
    if (action.bone && action.passType) { 
        passType = action.passType
        return status = WATCH 
    }

    if (action.sleepingPill) { 
        passType = null
        return status = SLEEP 
    }
    
    if (status === SLEEP || passType === action.type) { next(action) }
}