import {
    THROW_MONSTER_CARDS_TO_E_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD
} from 'reduxs/constant'


const initState = {
    firstAreaCards: []
}



export default function battleField (state = initState, action) {
    switch(action.type){
        case THROW_MONSTER_CARDS_TO_E_BATTLEFIELD:
            return throwHandle(state, action)
        case DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD:
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