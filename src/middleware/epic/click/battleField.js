import {
    CLICK_BATTLE_FIELD,
    ACTIVE_BATTLE_FIELD
} from 'reduxs/constant'



export default (action$, store) =>
    action$.ofType(CLICK_BATTLE_FIELD)
    .map(action => {
        const stateSnapshot = store.getState()
        const card = stateSnapshot.battleField.firstAreaCards[action.content.index]

        card.inBattleFieldTarget(store)

        return {
            type: ACTIVE_BATTLE_FIELD,
            content: action.content
        }
    })