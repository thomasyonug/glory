import {$ws} from 'plugin/index'


const gameSocket = $ws.gameSocket

export default store => next => action => {
    if (match(action)) { 
        
        gameSocket.coreSocket.$emit('game', {
            type: 'transfer',
            content: {
                action: action
            }
        })
        
        return next({...action})
    } else {
        return next(action)
    }
}


function match (action) {
    if (action instanceof window.Transer) {
        return true
    } else {
        return false
    }
}
