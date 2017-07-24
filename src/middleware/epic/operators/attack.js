import {
    CLICK_BATTLE_FIELD,
    CLICK_E_BATTLE_FIELD,
    CLICK_RIGHT_DOCUMENT,
    ATTACK
} from 'reduxs/constant'


import { Observable } from 'rxjs/Observable';


export default (action$, store) => 
    Observable.merge(
        action$.ofType(CLICK_BATTLE_FIELD),
        action$.ofType(CLICK_E_BATTLE_FIELD),
        action$.ofType(CLICK_RIGHT_DOCUMENT)
    )
    .pairwise()
    .filter(xs => 
        xs.$firstOne().type === CLICK_BATTLE_FIELD
        && 
        xs.$lastOne().type === CLICK_E_BATTLE_FIELD 
    )
    .map(xs => ({
        glory: ATTACK,
        content: {
            toIndex: xs.$lastOne().content.index,
            fromIndex: xs.$firstOne().content.index       
        }
    }))
