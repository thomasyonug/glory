import {
    GET_ROOMS, 
    CREATE_ROOM,
    JOIN_ROOM, 
    QUIT_ROOM,
    SET_ROOMS
} from 'reduxs/constant'


const initState = {
    rooms: [],
    currentRoom: {}
}



export default function User(state = initState, action) {
    switch(action.type){
        case GET_ROOMS:
            return {
                ...state,
                rooms: action.content
            }
        case SET_ROOMS:
            return {
                ...state,
                rooms: action.content
            }
        case CREATE_ROOM:
            return state

        case JOIN_ROOM:
            return state

        case QUIT_ROOM:
            return state


        default:
        return state;
    }
}
