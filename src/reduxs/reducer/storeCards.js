import {
    ADD_STORECARDS,
    DELETE_STORECARDS,
    UPDATE_STORECARDS,
    SET_STORECARDS
} from 'reduxs/constant'



const initState = {
    cards: []
}



export default function StoreCards(state = initState, action){
    switch(action.type){
        case SET_STORECARDS:
            return setHandle(state, action)
        case ADD_STORECARDS:
            return addHandle(state, action)
        case DELETE_STORECARDS:
            return deleteHandle(state, action)
        case UPDATE_STORECARDS:
            return updateHandle(state, action)
        default:
            return state
    }
}

function setHandle (state, action) {
    return {
        ...state,
        cards: action.content
    }
}

function addHandle (state, action) {
    return {
        ...state,
        cards: state.cards.concat(action.content)
    }
}


function deleteHandle (state, action) {
    const {
        start,
        number,
        card
    } = action.content

    
    if (card) {
        return {
            cards: state.cards.$delete(card)
        }
    } 

    if (start && number) {

        const cards = [...state.cards]

        cards.splice(start, number)
        return {
            cards
        }
    }

}

function updateHandle (state, action) {
    const {index, content} = action
    const {cards} = state
    index && ( cards[index] = content )
    return {
        ...state,
        cards: [...cards]
    }
}

