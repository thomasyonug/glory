import {
} from 'reduxs/constant'


export default function (store, next, action) {
    const stateSnapshot = store.getState()

    const {
        handCards
    } = stateSnapshot

    if (action.glory !== 'get_card_from_hand_to_battle') { return next(action) }

    const {
        toIndex,
        fromIndex
    } = action.content

    
    const monster = handCards.cards[fromIndex]

    monster?.momentum?.(store, next, action)
}

