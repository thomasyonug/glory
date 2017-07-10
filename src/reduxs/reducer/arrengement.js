import {
    SET_CARDGROUPS
} from 'reduxs/constant'


const initState = {
    cardGroups: []
}



export default function arrengement(state = initState, action) {
    
    switch (action.type) {
        case SET_CARDGROUPS:
            return {
                ...state,
                cardGroups: action.content
            }



        default:
            return state
    }
}
