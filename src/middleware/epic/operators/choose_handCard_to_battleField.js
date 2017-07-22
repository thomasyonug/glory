import {
    CLICK_BATTLE_FIELD,
    CLICK_HAND_CARD
} from 'reduxs/constant'


import { Observable } from 'rxjs/Observable';


export default (action$, store) => 
    Observable.merge(
        action$.ofType(CLICK_BATTLE_FIELD),
        action$.ofType(CLICK_HAND_CARD) 
    )
    .pairwise()
    .filter(xs => 
        xs.$firstOne().type === CLICK_HAND_CARD
        && 
        xs.$lastOne().type === CLICK_BATTLE_FIELD 
    )
    .map(xs => {
        console.log(xs)
        return {
            type: '123'
        }
    })
