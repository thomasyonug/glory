import {
    ROUND_NAME_START,
    ROUND_NAME_GET_CARD_REGULAR,
    ROUND_NAME_PLAY,
    ROUND_NAME_END,
    ROUND_NAME_SILENT,
    NEXT_ROUND,
    INIT_GOD
} from 'reduxs/constant'


export const nextRoundStateMap = new Map([
    [ROUND_NAME_START, ROUND_NAME_GET_CARD_REGULAR],
    [ROUND_NAME_GET_CARD_REGULAR, ROUND_NAME_PLAY],
    [ROUND_NAME_PLAY, ROUND_NAME_END],
    [ROUND_NAME_END, ROUND_NAME_SILENT],
    [ROUND_NAME_SILENT, ROUND_NAME_START]
])

const nextRoundRoleMap = new Map([
    ['e', 'my'],
    ['my', 'e']
])

const initState = {
    roundState: null,
    e_roundState: null,
    roundRole: null,
    gaming: false,
}



export default function God(state = initState, action) {
    switch (action.type) {
        case NEXT_ROUND: 
            return nextHandle(state, action)

        case INIT_GOD:
            return initHandle(state, action)
        default:
            return state
    }
}




function nextHandle(state, action) {
    const {
        roundState,
        roundRole,
        e_roundState
    } = state
    if (roundRole === 'my') {
        if (roundState === ROUND_NAME_END) {
            return {
                ...state,
                roundState: nextRoundStateMap.get(roundState),
                roundRole: nextRoundRoleMap.get(roundRole),
                e_roundState: nextRoundStateMap.get(e_roundState)
            }
        } else {
            return {
                ...state,
                roundState: nextRoundStateMap.get(roundState)
            }
        }
    } else {
        if (e_roundState === ROUND_NAME_END) {
            return {
                ...state,
                e_roundState: nextRoundStateMap.get(e_roundState),
                roundRole: nextRoundRoleMap.get(roundRole),
                roundState: nextRoundStateMap.get(roundState)
            }
        } else {
            return {
                ...state,
                e_roundState: nextRoundStateMap.get(e_roundState)
            }
        }
    }
}

function initHandle(state, action){
    if (action.content.index === 'first') {
        return {
            ...state,
            roundState: ROUND_NAME_START,
            e_roundState: ROUND_NAME_SILENT,
            roundRole: 'my',
            gaming: true
        }
    } else {
        return {
            ...state,
            roundState: ROUND_NAME_SILENT,
            e_roundState: ROUND_NAME_START,
            roundRole: 'e',
            gaming: true
        }
    }
}