import {
    PUSH_INFO,
    CLEAR_MSGS
} from 'reduxs/constant'


const initState = {
    msgs: []
}



export default function chat(state = initState, action) {
    switch(action.type){
        case PUSH_INFO: 
            return {
                msgs: [
                    ...state.msgs,
                    action.content.content
                ]
            }
        case CLEAR_MSGS:
            return {
                msgs: []
            }

        default:
        return state;
    }
}
