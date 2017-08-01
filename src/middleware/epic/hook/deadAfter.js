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
    .do(x => console.log('attackAfter'))
    .map(action => {
        console.log(action)
        return {
            type: 'fuck'
        }
    })
