import {
    CLICK_HAND_CARD,
    ACTIVE_HANDCARD
} from 'reduxs/constant'



export default (action$, store) =>
    action$.ofType(CLICK_HAND_CARD)
    .map(action => {
        const stateSnapshot = store.getState()
        const card = stateSnapshot.handCards.cards[action.content.index]

        card && card.inHandCardTarget && card.inHandCardTarget(store)
        
        return {
            type: ACTIVE_HANDCARD,
            content: action.content
        }
    })