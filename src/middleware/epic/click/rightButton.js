import {
    CLICK_RIGHT_BUTTON
} from 'reduxs/constant'




export default (action$, store) => 
    action$.ofType(CLICK_RIGHT_BUTTON)
    .map(action => ({
        glory: 'unActiveAll'
    }))