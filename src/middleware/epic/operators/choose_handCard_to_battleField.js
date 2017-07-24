import {
    CLICK_BATTLE_FIELD,
    CLICK_HAND_CARD,
    CLICK_RIGHT_DOCUMENT
} from 'reduxs/constant'


import { Observable } from 'rxjs/Observable';


export default (action$, store) => 
    Observable.merge(
        action$.ofType(CLICK_BATTLE_FIELD),
        action$.ofType(CLICK_HAND_CARD),
        action$.ofType(CLICK_RIGHT_DOCUMENT)
    )
<<<<<<< HEAD
=======
    .do(x => console.log(x))
>>>>>>> 2fd7e2547aef666c0b28b1fb6d4e77828f58f4a3
    .pairwise()
    .filter(xs => 
        xs.$firstOne().type === CLICK_HAND_CARD
        && 
        xs.$lastOne().type === CLICK_BATTLE_FIELD 
    )
    .map(xs => {
        const fromIndex = xs.$firstOne().content.index
        const toIndex = xs.$lastOne().content.index



        return new window.Transer({
            glory: 'get_card_from_hand_to_battle',
            content: {
                fromIndex,
                toIndex
            }
        })
        
    })
