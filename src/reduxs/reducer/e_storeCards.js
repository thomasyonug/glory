import {
    ADD_E_STORECARDS,
    DELETE_E_STORECARDS,
    UPDATE_E_STORECARDS,
} from 'reduxs/constant'

import {cardClassMap} from 'resource'



const initState = {
    cards: new Array(40).fill(1).map(() => new (cardClassMap.get('1'))())
}



export default function E_StoreCards(state = initState, action){
    switch(action.type){
        case ADD_E_STORECARDS:
            return addHandle(state, action)
        case DELETE_E_STORECARDS:
            return deleteHandle(state, action)
        case UPDATE_E_STORECARDS:
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
    index && cards.splice(index, 1)
    content && cards.splice(cards.findIndex(item => item.id === content), 1)

    return {
        ...state,
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

