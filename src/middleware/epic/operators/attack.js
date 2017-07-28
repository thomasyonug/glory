import {
    // CLICK_BATTLE_FIELD,
    // CLICK_E_BATTLE_FIELD
} from 'reduxs/constant'

import * as inputConstant from 'reduxs/constant'


import { Observable } from 'rxjs/Observable';


export default (action$, store) => 
    Observable.merge(
        ...Object.values(inputConstant).map(input => action$.ofType(input))
    ).map(xs => ({type: 'fuck'}))


