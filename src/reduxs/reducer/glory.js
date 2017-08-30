import {
    REDUCE_HP,
    REDUCE_E_HP,
    SET_HP,
    SET_E_HP,
    SET_ANIMATE_INFO,
    SET_E_ANIMATE_INFO,
    PUSH_MAGIC_TRIGGER,
    PUSH_TRAP_TRIGGER, 
    PUSH_ATTACK_TRIGGER,
    PUSH_EFFECT_TRIGGER,
    DELETE_MAGIC_TRIGGE,
    DELETE_TRAP_TRIGGER,
    DELETEE_ATTACK_TRIGGER,
    DELETE_EFFECT_TRIGGER,
} from 'reduxs/constant'


const initState = {
    HP: null,
    E_HP: null,
    animateInfo: null,
    e_animateInfo: null,
    magicTriggerList: [],
    trapTriggerList: [],
    attackTriggerList: [],
    effectTriggerList: []
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
        case PUSH_MAGIC_TRIGGER:
            return {
                ...state,
                magicTriggerList: state.magicTriggerList.concat(action.content)
            }
        case PUSH_TRAP_TRIGGER:
            return {
                ...state,
                trapTriggerList: state.trapTriggerList.concat(action.content)
            }
        case PUSH_ATTACK_TRIGGER:
            return {
                ...state,
                attackTriggerList: state.attackTriggerList.concat(action.content)
            }
        case PUSH_EFFECT_TRIGGER:
            return {
                ...state,
                effectTriggerList: state.effectTriggerList.concat(action.content)
            }
        case DELETE_MAGIC_TRIGGE:
            return {
                ...state,
                magicTriggerList: state.magicTriggerList.$delete(trigger => trigger === action.content)
            }
        case DELETE_TRAP_TRIGGER:
            return {
                ...state,
                trapTriggerList: state.trapTriggerList.$delete(trigger => trigger === action.content)
            }
        case DELETEE_ATTACK_TRIGGER:
            return {
                ...state,
                attackTriggerList: state.attackTriggerList.$delete(trigger => trigger === action.content)
            }
        case DELETE_EFFECT_TRIGGER:
            return {
                ...state,
                effectTriggerList: state.effectTriggerList.$delete(trigger => trigger === action.content)
            }
        default:
            return state
    }
}
