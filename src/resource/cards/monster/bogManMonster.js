import {MonsterEntity} from './monsterEntity'
import {prototype} from 'decorators'
import {
    THROW_MONSTER_CARDS_TO_BATTLEFIELD,
    THROW_MONSTER_CARDS_TO_E_BATTLEFIELD
} from 'reduxs/constant'
















@prototype({
    describe: '小沼泽人',
    cardName: 'littleBogManMonster',
    attack: 500,
    defensive: 500,
})
class LittleBogManMonster extends MonsterEntity {
    static cardName = 'littleBogMonster'
}












@prototype({
    describe: '沼泽人',
    cardName: 'bogManMonster',
    attack: 1000,
    defensive: 1000,
    deathwhisper (store, action) {
        console.log(action)
        const {
            index
        } = action.content

        const {
            belong
        } = action.epicHelper

        const stateSnapshot = store.getState()

        const field = belong === 'me' ? stateSnapshot.battleField : stateSnapshot.e_battleField
        const type = belong === 'me' ? THROW_MONSTER_CARDS_TO_BATTLEFIELD : THROW_MONSTER_CARDS_TO_E_BATTLEFIELD

        if (field.firstAreaCards[index - 1] === null) {
            store.dispatch({
                type,
                content: {
                    index: index - 1,
                    card: new LittleBogManMonster()
                }
            })
        }
        if (field.firstAreaCards[index + 1] === null) {
            store.dispatch({
                type,
                content: {
                    index: index + 1,
                    card: new LittleBogManMonster()
                }
            })
        }


    }
})
export class BogManMonster extends MonsterEntity {
    static cardCode = '8';
    static cardName = 'bogManMonster'
}


