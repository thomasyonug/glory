import {
    ADD_E_STORECARDS,
    DELETE_E_STORECARDS,
    UPDATE_E_STORECARDS,
    QUERY_E_STORECARDS
} from 'reduxs/constant'


export function addEStoreCardsActionCreator(content){
    return {
        type: ADD_E_STORECARDS,
        content
    }
}

export function deleteEStoreCardsActionCreator(content){
    return {
        type: DELETE_E_STORECARDS,
        content
    }
}

export function updateEStoreCardsActionCreator(content){
    return {
        type: UPDATE_E_STORECARDS,
        content
    }
}

export function queryEStoreCardsActionCreator(content){
    return {
        type: QUERY_E_STORECARDS,
        content
    }
}