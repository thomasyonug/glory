import {
    INIT_FRIENDS
} from 'reduxs/constant'


const initState = {
    allFriends: [],
    onlineFriends: []
}



export default function chat(state = initState, action) {
    switch(action.type){
        case INIT_FRIENDS: 
            const {
                allFriends,
                onlineFriends
            } = action.content
            return {
                ...state,
                allFriends,
                onlineFriends
            }
        default:
        return state;
    }
}
