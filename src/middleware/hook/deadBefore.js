import {
    DROP_MONSTER_CARDS_FROM_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD
} from 'reduxs/constant'


export default function (store, next, action) {
    const stateSnapshot = store.getState()
    const {
        battleField,
        e_battleField
    } = stateSnapshot

    if (action.type === DROP_MONSTER_CARDS_FROM_BATTLEFIELD) {
        const monster = battleField[action.content.index]
        monster && monster.deathwhisper && monster.deathwhisper()
        monster?.a 
    }


}