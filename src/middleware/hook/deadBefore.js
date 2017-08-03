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
        const monster = battleField.firstArea[action.content.index]
        monster.struggle?.(store, next, action)
    } else if (DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD) {
        const monster = e_battleField.firstArea[action.content.index]
        monster.struggle?.(store, next, action)
    } else {
        next(action)
    }
}

