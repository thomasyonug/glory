import {
    MODIFY_LOGIN_STATUS,
    SAVE_LOGIN_TOKEN
} from 'reduxs/constant'


const initState = {
    logined: false,
    username: null,
    password: null,
    token: null
}



export default function User(state = initState, action) {
    switch(action.type){
        case MODIFY_LOGIN_STATUS:
            return {
                ...state,
                logined: action.content
            }
        break;

        case SAVE_LOGIN_TOKEN:
            return {
                ...state,
                token: action.content
            }
        break;

        default:
        return state
    }
}
