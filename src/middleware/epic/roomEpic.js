import {
    GET_ROOMS, 
    // CREATE_ROOM,
    // JOIN_ROOM, 
    // QUIT_ROOM
} from 'reduxs/constant'
import {getRooms$} from 'ws'

export const getRoomEpic = (action$, store) => {
    return action$.ofType(GET_ROOMS)
           getRooms$
                    .map(data => {
                        console.log(data)
                        return {type: GET_ROOMS}
                    })
                    .takeUntil(action$.ofType(GET_ROOMS))
        // .map(item => getRooms$)
        // .subscribe(data => {
        //     console.log(data, 'subscribe data')
        //     return {type: GET_ROOMS}
        // })
        // .mapTo({type: GET_ROOMS})
}