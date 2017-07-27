import {
    NEXT_ROUND,
    ROUND_NAME_GET_CARD_REGULAR
} from 'reduxs/constant'


export default (action$, store) =>
  action$.ofType(NEXT_ROUND)
    .filter(action => store.getState().god.roundState === ROUND_NAME_GET_CARD_REGULAR)
    .map(action => new window.Transer({
        glory: 'get_cards_from_store_to_hand',
        content: {
            start: -1
        }
    }))
