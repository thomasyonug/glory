import {combineReducers} from 'redux'
import storeCards        from './storeCards'
import e_storeCards      from './e_storeCards'
import handCards         from './handCards'
import e_handCards       from './e_handCards'
import god               from './god'
import user              from './user'



export default combineReducers({
    storeCards,
    e_storeCards,
    handCards,
    e_handCards,
    god,
    user
})


