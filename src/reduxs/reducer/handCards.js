import {
    ADD_HANDCARDS,
    DELETE_HANDCARDS,
    UPDATE_HANDCARDS,
    QUERY_HANDCARDS
} from 'reduxs/constant'

const initState = {
    cards: []
}



export default function HandCards(state = initState, action){
    switch(action.type){
        case ADD_HANDCARDS:
            return addHandle(state, action);
        case DELETE_HANDCARDS:
            return deleteHandle(state, action);
        case UPDATE_HANDCARDS:
            return updateHandle(state, action);
        case QUERY_HANDCARDS:
            return queryHandle(state, action);
        default:
            return state
    }
}




function addHandle(state, action){
    return {
        cards: [...state.cards, action.content.card]
    }
}
function deleteHandle(state, action){
    const {
        card,
        index
    } = action.content

    return {
        cards: state.cards.$delete(card ? card : index)
    };
}

function updateHandle(state, action){
    return state;
}
function queryHandle(state, action){
    return state;
}
