import {
    ADD_HANDCARDS,
    DELETE_HANDCARDS,
    UPDATE_HANDCARDS,
    QUERY_HANDCARDS,
    
    ACTIVE_HANDCARD,
    UNACTIVE_HANDCARD
} from 'reduxs/constant'

const initState = {
    cards: new Array(10).fill(null),
    active: false,
    activeIndex: null
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
        case ACTIVE_HANDCARD:
            return activeHandle(state, action);
        case UNACTIVE_HANDCARD:
            return unactiveHandle(state, action);
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
        cards: state.cards.$setItem(card ? card : index, null)
    };
}

function updateHandle(state, action){
    return state;
}
function queryHandle(state, action){
    return state;
}
function activeHandle(state, action){
    return {
        ...state,
        active: true,
        activeIndex: action.content.index
    }
}
function unactiveHandle(state, action){
    return {
        ...state,
        active: false,
        activeIndex: null
    }
}