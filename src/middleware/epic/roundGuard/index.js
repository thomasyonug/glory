import {
    NEXT_ROUND,
    ROUND_NAME_GET_CARD_REGULAR
} from 'reduxs/constant'

import { Observable } from 'rxjs/Observable';

export default (action$, store) =>
  action$.ofType(NEXT_ROUND)
    .mergeMap(action => {
        const currentRound = store.getState().god.roundState

        switch (currentRound) {
            case ROUND_NAME_GET_CARD_REGULAR:
                return Observable.of(new window.Transer({
                    glory: 'get_cards_from_store_to_hand',
                    content: {
                        start: -1
                    }
                }))
            default:
                return Observable.of({})
        }
    })
