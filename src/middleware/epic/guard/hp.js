import {
    REDUCE_HP,
    REDUCE_E_HP,
    FINISH_GAME
} from 'reduxs/constant'


import { Observable } from 'rxjs/Observable';


export default (action$, store) => 
    Observable.merge(
        action$.ofType(REDUCE_HP),
        action$.ofType(REDUCE_E_HP)
    )
    .filter(xs => {
        const {
            HP,
            E_HP
        } = store.getState().glory
        
        if (HP <= 0 || E_HP <= 0) { return true }
        return false
    })
    .map(x => ({type: FINISH_GAME}))