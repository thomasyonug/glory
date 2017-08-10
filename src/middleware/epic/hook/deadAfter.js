import {
    DROP_MONSTER_CARDS_FROM_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD
} from 'reduxs/constant'


import { Observable } from 'rxjs/Observable';


export default (action$, store) => 
    Observable.merge(
        action$.ofType(DROP_MONSTER_CARDS_FROM_BATTLEFIELD),
        action$.ofType(DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD)
    )
    .filter(action => action.epicHelper)
    .map(action => {
        action.epicHelper?.card?.deathwhisper?.(store, action)
        return {
            type: 'deadAfterFinish'
        }
    })
