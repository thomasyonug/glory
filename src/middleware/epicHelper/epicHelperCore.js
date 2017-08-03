import {
    DROP_MONSTER_CARDS_FROM_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD
} from 'reduxs/constant'


export default store => next => action => {
    const {
        type,
        content
    } = action

    if (type === DROP_MONSTER_CARDS_FROM_BATTLEFIELD) {
        const stateSnapshot = store.getState()
        action.epicHelper = {
            card: stateSnapshot.battleField.firstArea[content.index]
        }
        return next(action)
    } else if (type === DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD) {
        const stateSnapshot = store.getState()
        action.epicHelper = {
            card: stateSnapshot.e_battleField.firstArea[content.index]
        }
        return next(action)
    } else {
        next(action)
    }

}

