import {
    ADD_STORECARDS,
    DELETE_STORECARDS,
    UPDATE_STORECARDS,
    QUERY_STORECARDS
} from 'reduxs/constant'


export function addStoreCardsActionCreator(content){
    return {
        type: ADD_STORECARDS,
        content
    }
}

export function deleteStoreCardsActionCreator(content){
    return {
        type: DELETE_STORECARDS,
        content
    }
}

export function updateStoreCardsActionCreator(content){
    return {
        type: UPDATE_STORECARDS,
        content
    }
}

export function queryStoreCardsActionCreator(content){
    return {
        type: QUERY_STORECARDS,
        content
    }
}