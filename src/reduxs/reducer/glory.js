import {
    REDUCE_HP,
    REDUCE_E_HP,
    SET_HP,
    SET_E_HP,
    SET_ANIMATE_NAME
} from 'reduxs/constant'


const initState = {
    HP: null,
    E_HP: null,
    animate_name: null
}



export default function Glory(state = initState, action) {
    switch(action.type){
        case REDUCE_HP:
            return {
                ...state,
                HP: state.HP + action.content
            }
        case REDUCE_E_HP:
            return {
                ...state,
                E_HP: state.E_HP + action.content
            }
        case SET_HP:
            return {
                ...state,
                HP: action.content
            }

        case SET_E_HP:
            return {
                ...state,
                E_HP: action.content 
            }

        case SET_ANIMATE_NAME:
            return {
                ...state,
                animate_name: action.content.animate_name
            }
        default:
            return state
    }
}
