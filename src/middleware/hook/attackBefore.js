import {
    
} from 'reduxs/constant'




export default function (store, next, action) {
    const stateSnapshot = store.getState()

    const {
        toIndex,
        fromIndex
    } = action.content

    const fromMonster = stateSnapshot.battleField.firstArea[fromIndex]
    const toMonster   = stateSnapshot.e_battleField.firstArea[toIndex]

    fromMonster?.prophet?.(store, next, action)
    fromMonster?.prophet?.(store, next, action)
}