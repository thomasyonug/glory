import {
    THROW_MONSTER_CARDS_TO_E_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD,
    REFRESH_E_ATTACK_TIMES,
    MINUS_E_ATTACK_TIMES,
    ACTIVE_E_BATTLEFIELD,
    UNACTIVE_E_BATTLEFIELD,
    ACTIVE_ATTACKABLE_E_BATTLEFIELD,
    UNACTIVE_ATTACKABLE_E_BATTLEFIELD,
    REFRESH
} from 'reduxs/constant'


const initState = {
    firstAreaCards: new Array(5).fill(null),
    secondAreaCards: new Array(5).fill(null),
    active: false,
    activeIndex: null,
    activeAttackAble: false
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

        case ACTIVE_E_BATTLEFIELD:
            return activeHandle(state, action)

        case UNACTIVE_E_BATTLEFIELD:
            return unactiveHandle(state, action)

        case ACTIVE_ATTACKABLE_E_BATTLEFIELD:
            return activeAttackAbleHandle(state, action)
        
        case UNACTIVE_ATTACKABLE_E_BATTLEFIELD:
            return unActiveAttackAbleHandle(state, action)
        case REFRESH:
            return initState
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

function activeHandle (state, action) {
    return {
        ...state,
        active: true,
        activeIndex: action.content.index
    }
}
function unactiveHandle (state, action) {
    return {
        ...state,
        active: false,
        activeIndex: null
    }
}

function activeAttackAbleHandle (state, action) {
    return {
        ...state,
        activeAttackAble: true
    }
}
function unActiveAttackAbleHandle (state, action) {
    return {
        ...state,
        activeAttackAble: false
    }
}