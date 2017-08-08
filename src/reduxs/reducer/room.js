import {
    // GET_ROOMS, 
    CREATE_ROOM,
    JOIN_ROOM, 
    QUIT_ROOM,
    SET_ROOMS,
    SET_ROOM,
    SET_HOST
} from 'reduxs/constant'


const initState = {
    rooms: [],
    currentRoom: {}
}



export default function room(state = initState, action) {
    switch(action.type){
        case SET_ROOMS:
            return {
                ...state,
                rooms: action.content
            }
        case CREATE_ROOM:
            return state

        case JOIN_ROOM:
            return {
                ...state,
                currentRoom: action.content
            }

        case QUIT_ROOM:
            return state

        case SET_ROOM: 
            return {
                ...state,
                currentRoom: action.content
            }

        case SET_HOST: 
            return {
                ...state,
                currentHost: action.content
            }
        default:
        return state;
    }
}
