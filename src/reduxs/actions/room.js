import {
    GET_ROOMS, 
    // CREATE_ROOM,
    JOIN_ROOM, 
    // QUIT_ROOM
    SET_ROOMS
} from 'reduxs/constant'


export function getRoomsActionCreator (content){
    return {
        type: GET_ROOMS,
        content
    }
}

export function setRoomsActionCreator (content) {
    return {
        type: SET_ROOMS,
        content
    }
}

export function joinRoomActionCreator (content) {
    return {
        type: JOIN_ROOM,
        content 
    }
}