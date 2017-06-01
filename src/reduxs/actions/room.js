import {
    GET_ROOMS, 
    // CREATE_ROOM,
    // JOIN_ROOM, 
    // QUIT_ROOM
} from 'reduxs/constant'


export function getRoomsActionCreator (content){
    return {
        type: GET_ROOMS,
        content
    }
}
