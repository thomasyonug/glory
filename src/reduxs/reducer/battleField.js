import {
    THROW_MONSTER_CARDS_TO_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_BATTLEFIELD,
    SUMMONABLE_BATTLEFIELD,
    SUMMONENABLE_BATTLEFIELD,
    REFRESH_ATTACK_TIMES,
    MINUS_ATTACK_TIMES
} from 'reduxs/constant'


const initState = {
    firstAreaCards: new Array(5).fill(null),
    secondAreaCards: new Array(5).fill(null),
    summonAble: false
}



export default function battleField (state = initState, action) {
    switch(action.type){
        case THROW_MONSTER_CARDS_TO_BATTLEFIELD:
            return throwHandle(state, action)
        case DROP_MONSTER_CARDS_FROM_BATTLEFIELD:
            return dropHandle(state, action)
        case SUMMONABLE_BATTLEFIELD:
            return summonableHandle(state, action)
        case SUMMONENABLE_BATTLEFIELD:
            return summonEnableHandle(state, action)

        case REFRESH_ATTACK_TIMES:
            return refreshHandle(state, action)

        case MINUS_ATTACK_TIMES:
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

    newArr.splice(action.content.index, 1)

    return {
        ...state,
        firstAreaCards: newArr
    }
}

function summonableHandle (state, action) {
    return {
        ...state,
        summonAble: true
    }
}

function summonEnableHandle (state, action) {
    return {
        ...state,
        summonAble: false
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

