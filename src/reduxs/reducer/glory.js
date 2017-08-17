import {
    REDUCE_HP,
    REDUCE_E_HP,
    SET_HP,
    SET_E_HP,
    SET_ANIMATE_INFO,
    SET_E_ANIMATE_INFO
} from 'reduxs/constant'


const initState = {
    HP: null,
    E_HP: null,
    animateInfo: null,
    e_animateInfo: null
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

        case SET_ANIMATE_INFO:
            return {
                ...state,
                animateInfo: action.content
            }
        case SET_E_ANIMATE_INFO:
            return {
                ...state,
                e_animateInfo: action.content
            }
        default:
            return state
    }
}
