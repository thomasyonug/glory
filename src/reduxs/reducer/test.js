import {
} from 'reduxs/constant'


const initState = {
    test: null
}



export default function Test(state = initState, action) {
    switch(action.type){
        case 'test':
            console.log('test,13123123123')
            return {
                ...state,
                ...action.content
            }

        default:
            return state
    }
}
