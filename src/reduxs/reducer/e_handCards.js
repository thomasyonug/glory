import {
    ADD_E_HANDCARDS,
    DELETE_E_HANDCARDS,
    UPDATE_E_HANDCARDS,
    QUERY_E_HANDCARDS,
    REFRESH
} from 'reduxs/constant'

const initState = {
    cards: []
}




export default function E_HandCards(state = initState, action){
    switch(action.type){
        case ADD_E_HANDCARDS:
            return addHandle(state, action);
        case DELETE_E_HANDCARDS:
            return deleteHandle(state, action);
        case UPDATE_E_HANDCARDS:
            return updateHandle(state, action);
        case QUERY_E_HANDCARDS:
            return queryHandle(state, action);
        case REFRESH:
            return initState
        default:
            return state
    }
}




function addHandle(state, action){
    return {
        ...state,
        cards: [...state.cards, action.content.card]
    }
}
function deleteHandle(state, action){
    const {
        card,
        index
    } = action.content

    return {
        ...state,
        cards: state.cards.$delete(card || index)
    };
}

function updateHandle(state, action){
    return state;
}
function queryHandle(state, action){
    return state;
}
