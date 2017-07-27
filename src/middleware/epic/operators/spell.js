import {
    CLICK_RIGHT_DOCUMENT,
    SPELL_HANDCARD,
    CLICK_E_BATTLE_FIELD
} from 'reduxs/constant'


import { Observable } from 'rxjs/Observable';


export default (action$, store) => 
    Observable.merge(
        action$.ofType(CLICK_RIGHT_DOCUMENT),
        action$.ofType(SPELL_HANDCARD),
        action$.ofType(CLICK_E_BATTLE_FIELD)
    )
    .pairwise()
    .filter(xs => (
        xs.$firstOne().type === SPELL_HANDCARD &&
        xs.$lastOne().type  === CLICK_E_BATTLE_FIELD
    ))
    .map(xs => {
        return xs.$firstOne().effect(xs, store)
    })
