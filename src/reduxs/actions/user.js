import {
    MODIFY_LOGIN_STATUS    
} from 'reduxs/constant'


export function modifyLoginStatusActionCreator(content){
    return {
        type: MODIFY_LOGIN_STATUS,
        content
    }
}
