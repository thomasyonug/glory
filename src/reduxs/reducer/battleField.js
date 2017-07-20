import {
    THROW_MONSTER_CARDS_TO_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_BATTLEFIELD
} from 'reduxs/constant'


const initState = {
    firstAreaCards: new Array(5).fill(null),
    secondAreaCards: new Array(5).fill(null)
}



export default function battleField (state = initState, action) {
    switch(action.type){
        case THROW_MONSTER_CARDS_TO_BATTLEFIELD:
            return throwHandle(state, action)
        case DROP_MONSTER_CARDS_FROM_BATTLEFIELD:
            return dropHandle(state, action)
        default: 
            return state
    }
}


function throwHandle (state, action) {
    const {
        index,
        card
    } = action.content
    if (state.firstAreaCards[index]) { return }     

    const newArr = [
        ...state.firstAreaCards
    ]

    newArr[index] = card

    return {
        ...state,
        firstAreaCards: newArr
    }
}


function dropHandle (state, action) {
    const newArr = [
        ...state.firstAreaCards
    ]

    newArr.splice(action.content.index, 1)

    return {
        ...state,
        firstAreaCards: newArr
    }
}