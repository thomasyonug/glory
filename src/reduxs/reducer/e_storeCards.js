import {
    ADD_E_STORECARDS,
    DELETE_E_STORECARDS,
    UPDATE_E_STORECARDS,
    SET_E_STORECARDS,
    REFRESH
} from 'reduxs/constant'




const initState = {
    cards: []
}



export default function E_StoreCards(state = initState, action){
    switch(action.type){
        case SET_E_STORECARDS:
            return setHandle(state, action)
        case ADD_E_STORECARDS:
            return addHandle(state, action)
        case DELETE_E_STORECARDS:
            return deleteHandle(state, action)
        case UPDATE_E_STORECARDS:
            return updateHandle(state, action)
        case REFRESH:
            return initState
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

