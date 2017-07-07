import {
    PUSH_INFO
} from 'reduxs/constant'


const initState = {
    msgs: []
}



export default function chat(state = initState, action) {
    switch(action.type){
        case PUSH_INFO: 
            return {
                msgs: [
                    ...state.msgs,
                    action.content.content
                ]
            }


        default:
        return state;
    }
}
