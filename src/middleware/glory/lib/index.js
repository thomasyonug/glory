
import {
    DELETE_STORECARDS,
    ADD_HANDCARDS
} from 'reduxs/constant'



export default {
    get_cards_from_store_to_hand (store, next, action) {
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
}