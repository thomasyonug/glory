import {
    MODIFY_LOGIN_STATUS
} from 'reduxs/constant'


const initState = {
    logined: false,
    username: undefined,
    password: undefined
}



export default function User(state = initState, action) {
    switch(action.type){
        case MODIFY_LOGIN_STATUS:
            return {
                ...state,
                logined: action.content
            }
        default:
        return state
    }
}
