import {
    ADD_STORECARDS,
    DELETE_STORECARDS,
    UPDATE_STORECARDS,
} from 'reduxs/constant'



const initState = {
    cards: new Array(40).fill(1)
}



export default function StoreCards(state = initState, action){
    switch(action.type){
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



function addHandle (state, action) {
    return {
        ...state,
        cards: state.cards.concat(action.content)
    }
}


function deleteHandle (state, action) {
    const {index, content} = action    
    const {cards} = state
    if (index !== undefined) cards.splice(index, 1)
    content && cards.splice(cards.findIndex(item => item.id === content), 1)
    return {
        cards: [...cards]
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

