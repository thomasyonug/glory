import {
    PUSH_INFO,
    CLEAR_MSGS,
    PUSH_FRIEND_MSG
} from 'reduxs/constant'


const initState = {
    msgs: [],
    friendsMsg: []
}



export default function chat(state = initState, action) {
    switch(action.type){
        case PUSH_INFO: 
            return {
                ...state,
                msgs: [
                    ...state.msgs,
                    action.content.content
                ]
            }
        
        case PUSH_FRIEND_MSG:
            return {
                ...state,
                friendsMsg: [
                    ...state.friendsMsg,
                    action.content.content
                ]
            }
        
        case CLEAR_MSGS:
            return {
                ...state,
                msgs: []
            }

        default:
        return state;
    }
}
