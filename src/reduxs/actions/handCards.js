import{
    ADD_HANDCARDS,
    DELETE_HANDCARDS,
    UPDATE_HANDCARDS,
    QUERY_HANDCARDS
} from 'reduxs/constant'


export function addHandCardsActionCreator(content){
    return {
        type: ADD_HANDCARDS,
        content
    }
}

export function deleteHandCardsActionCreator(content){
    return {
        type: DELETE_HANDCARDS,
        content
    }
}

export function updateHandCardsActionCreator(content){
    return {
        type: UPDATE_HANDCARDS,
        content
    }
}
