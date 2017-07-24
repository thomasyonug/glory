import {
    REFRESH_ATTACK_TIMES
} from 'reduxs/constant'



export default store => next => action => {

    const stateSnapshot = store.getState()

    const firstAreaCards = stateSnapshot.battleField.firstAreaCards

    firstAreaCards.forEach((card, index) => {
        if (!card) { return }
        store.dispatch(new window.Transer({
            type: REFRESH_ATTACK_TIMES,
            content: {
                index
            }
        }))
    })

    return next(action)
}


