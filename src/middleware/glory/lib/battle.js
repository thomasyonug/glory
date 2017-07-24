import {
    DROP_MONSTER_CARDS_FROM_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD
} from 'reduxs/constant'




function ATTACK (store, next, action) {
    const {
        battleField,
        e_battleField
    } = store.getState()

    const {
        fromIndex,
        toIndex
    } = action.content

    const fromMonster = battleField.firstAreaCards[fromIndex]
    const toMonster   = e_battleField.firstAreaCards[toIndex]

    const result =  toMonster.attack - fromMonster.attack

    const destoryFromMonster = function(){
        store.dispatch(new window.Transer({
            type: DROP_MONSTER_CARDS_FROM_BATTLEFIELD,
            content: {
                index: fromIndex
            }
        }))
    }
    const destoryToMonster   = function(){
        store.dispatch(new window.Transer({
            type: DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD,
            content: {
                index: toIndex
            }
        }))
    }

    if (result === 0) {
        destoryFromMonster()
        destoryToMonster()
    } else if (result > 0) {
        destoryFromMonster()
    } else if (result < 0) {
        destoryToMonster()
    }
}












export default {
    ATTACK
}




