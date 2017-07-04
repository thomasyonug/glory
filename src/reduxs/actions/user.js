import {
    MODIFY_LOGIN_STATUS,
    SAVE_LOGIN_TOKEN
} from 'reduxs/constant'


export function modifyLoginStatusActionCreator(content){
    return {
        type: MODIFY_LOGIN_STATUS,
        content
    }
}


export function saveLoginTokenActionCreator (content) {
    return {
        type: SAVE_LOGIN_TOKEN,
        content
    }
}
