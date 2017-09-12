import {
    THROW_MONSTER_CARDS_TO_BATTLEFIELD,
    DELETE_HANDCARDS,
    DELETE_E_HANDCARDS,
    THROW_MONSTER_CARDS_TO_E_BATTLEFIELD,
    THROW_TRAP_CARD_TO_BATTLEFIELD,
    DROP_TRAP_CARD_TO_BATTLEFIELD,
    THROW_TRAP_CARD_TO_E_BATTLEFIELD,
    DROP_TRAP_CARD_TO_E_BATTLEFIELD
} from 'reduxs/constant'



function get_card_from_hand_to_battle (store, next, action) {
    const {
        fromIndex,
        toIndex
    } = action.content

    const {
        cards
    } = store.getState().handCards

    const card = cards[fromIndex]

    card.camp = 'my'

    next({
        type: DELETE_HANDCARDS,
        content: {
            index: fromIndex
        }
    })

    next({
        type: THROW_MONSTER_CARDS_TO_BATTLEFIELD,
        content: {
            index: toIndex,
            card
        }
    })

    store.dispatch({
        glory: 'unActiveAll'
    })

    //to triggle summonAfter epic
    next({
        type: 'get_card_from_hand_to_battle',
        content: {
            card,
            fromIndex,
            toIndex
        }
    })
}


function get_card_from_e_hand_to_e_battle (store, next, action) {
    const {
        fromIndex,
        toIndex
    } = action.content

    const {
        cards
    } = store.getState().e_handCards

    const card = cards[fromIndex]

    card.camp = 'e'

    next({
        type: DELETE_E_HANDCARDS,
        content: {
            index: fromIndex
        }
    })

    next({
        type: THROW_MONSTER_CARDS_TO_E_BATTLEFIELD,
        content: {
            index: toIndex,
            card
        }
    })
    
    store.dispatch({
        glory: 'unActiveAll'
    }),

    //to triggle summonAfter epic
    next({
        type: 'get_card_from_e_hand_to_e_battle',
        content: {
            card,
            fromIndex,
            toIndex
        }
    })
}

function get_card_from_hand_to_trap_battle (store, next, action) {
    const {
        fromIndex,
        toIndex
    } = action.content

    const {
        cards
    } = store.getState().handCards

    const card = cards[fromIndex]

    card.camp = 'my'

    next({
        type: DELETE_HANDCARDS,
        content: {
            index: fromIndex
        }
    })

    next({
        type: THROW_TRAP_CARD_TO_BATTLEFIELD,
        content: {
            index: toIndex,
            card
        }
    })

    store.dispatch({
        glory: 'unActiveAll'
    })

    //trigger coverAfter 
    next({
        type: 'get_card_from_hand_to_trap_battle',
        content: {
            card,
            fromIndex,
            toIndex
        }
    })
}
function get_card_from_hand_to_trap_e_battle (store, next, action) {
    const {
        fromIndex,
        toIndex
    } = action.content

    const {
        cards
    } = store.getState().e_handCards

    const card = cards[fromIndex]

    card.camp = 'e'

    next({
        type: DELETE_E_HANDCARDS,
        content: {
            index: fromIndex
        }
    })

    next({
        type: THROW_TRAP_CARD_TO_E_BATTLEFIELD,
        content: {
            index: toIndex,
            card
        }
    })
    
    store.dispatch({
        glory: 'unActiveAll'
    })

    //trigger coverAfter
    next({
        type: 'get_card_from_hand_to_trap_e_battle',
        content: {
            card,
            fromIndex,
            toIndex
        }
    })
}


export default {
    get_card_from_hand_to_battle,
    get_card_from_e_hand_to_e_battle,
    get_card_from_hand_to_trap_battle,
    get_card_from_hand_to_trap_e_battle
}