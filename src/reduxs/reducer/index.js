import { combineReducers } from 'redux'
import storeCards          from './storeCards'
import e_storeCards        from './e_storeCards'
import handCards           from './handCards'
import e_handCards         from './e_handCards'
import god                 from './god'
import user                from './user'
import room                from './room'
import chat                from './chat'
import arrengement         from './arrengement'
import battleField         from './battleField'
import e_battleField       from './e_battleField'
import glory               from './glory'
import test                from './test'






export default combineReducers({
    storeCards,
    e_storeCards,
    handCards,
    e_handCards,
    god,
    user,
    room,
    chat,
    arrengement,
    battleField,
    e_battleField,
    glory,
    test
})


