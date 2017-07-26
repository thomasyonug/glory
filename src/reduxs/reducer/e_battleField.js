import {
    THROW_MONSTER_CARDS_TO_E_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD,
    REFRESH_E_ATTACK_TIMES,
    MINUS_E_ATTACK_TIMES
} from 'reduxs/constant'


const initState = {
    firstAreaCards: new Array(5).fill(null),
    secondAreaCards: new Array(5).fill(null)
}



export default function battleField (state = initState, action) {
    switch(action.type){
        case THROW_MONSTER_CARDS_TO_E_BATTLEFIELD:
            return throwHandle(state, action)
        case DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD:
            return dropHandle(state, action)

        
        case REFRESH_E_ATTACK_TIMES:
            return refreshHandle(state, action)

        case MINUS_E_ATTACK_TIMES:
            return minusHandle(state, action)
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

    newArr[action.content.index] = null

    return {
        ...state,
        firstAreaCards: newArr
    }
}


function refreshHandle (state, action) {
    const firstAreaCards = state.firstAreaCards
    const {
        index
    } = action.content

    firstAreaCards[index].validateAttackTimes = 1


    return {
        ...state,
        firstAreaCards: [
            ...firstAreaCards
        ]
    }
}

function minusHandle (state, action) {
    const firstAreaCards = state.firstAreaCards

    const {
        index
    } = action.content

    firstAreaCards[index].validateAttackTimes -= 1


    return {
        ...state,
        firstAreaCards: [
            ...firstAreaCards
        ]
    }
}
