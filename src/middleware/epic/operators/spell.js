import {
    CLICK_RIGHT_DOCUMENT,
    SPELL_HANDCARD,
    SPELL_HANDCARD_DONE
} from 'reduxs/constant'


import { Observable } from 'rxjs/Observable';


export default (action$, store) => 
    Observable.merge(
        action$.ofType(CLICK_RIGHT_DOCUMENT),
        action$.ofType(SPELL_HANDCARD),
        action$.ofType(SPELL_HANDCARD_DONE)
    )
    .pairwise()
