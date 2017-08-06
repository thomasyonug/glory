import {
} from 'reduxs/constant'


import { Observable } from 'rxjs/Observable';


export default (action$, store) => 
    Observable.ofType('ATTACK')
    .do(x => console.log(x, 'attackepic'))
    .map(action => {
        const {
            toMonster,
            fromMonster
        } = action.content

        toMonster?.aftershock?.(store, action)
        fromMonster?.aftershock?.(store, action)

        return {
            type: ''
        }
    })
