import {
    ROUND_NAME_START,
    ROUND_NAME_GET_CARD_REGULAR,
    ROUND_NAME_PLAY,
    ROUND_NAME_END,
    ROUND_NAME_SILENT,
    NEXT_ROUND
} from 'reduxs/constant'


const nextRoundStateMap = new Map([
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
    roundState: ROUND_NAME_START,
    e_roundState: ROUND_NAME_SILENT,
    roundRole: 'my'

}



export default function God(state = initState, action) {
    switch (action.type) {
        case NEXT_ROUND: 
            return nextHandle(state, action)
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