import {
    DELETE_STORECARDS,
    ADD_HANDCARDS,
    DELETE_E_STORECARDS,
    ADD_E_HANDCARDS
} from 'reduxs/constant'



function get_cards_from_store_to_hand (store, next, action) {
    const {
        start,
        end
    } = action.content


    const cards = store.getState().storeCards.cards.slice(start, end)

    cards.forEach(card => {
        next({
            type: DELETE_STORECARDS,
            content: {
                card
            }
        })

        next({
            type: ADD_HANDCARDS,
            content: {
                card
            } 
        })
    })
}

function get_cards_from_e_store_to_e_hand (store, next, action) {
    const {
        start,
        end
    } = action.content


    const cards = store.getState().e_storeCards.cards.slice(start, end)

    cards.forEach(card => {
        next({
            type: DELETE_E_STORECARDS,
            content: {
                card
            }
        })

        next({
            type: ADD_E_HANDCARDS,
            content: {
                card
            } 
        })
    })

}
export default {
    get_cards_from_e_store_to_e_hand,
    get_cards_from_store_to_hand
}