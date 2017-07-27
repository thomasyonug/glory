import {MagicEntity} from './magicEntity'
import {prototype} from 'decorators'
import {
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_BATTLEFIELD,
    DELETE_HANDCARDS
} from 'reduxs/constant'

@prototype({
    describe: '指定消灭所有场上怪物',
    cardName: 'BlackHoleMagic',
    effect (xs, store) {
        const stateSnapshot = store.getState()
        const {
            battleField,
            e_battleField
        } = stateSnapshot

        battleField.firstAreaCards.forEach((card, index) => {
            if (card) {
                store.dispatch(new window.Transer({
                    type: DROP_MONSTER_CARDS_FROM_BATTLEFIELD,
                    content: {
                        index
                    }
                }))
            }
        })

        e_battleField.firstAreaCards.forEach((card, index) => {
            if (card) {
                store.dispatch(new window.Transer({
                    type: DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD,
                    content: {
                        index
                    }
                }))
            }
        })

        return new window.Transer({
            type: DELETE_HANDCARDS, 
            content: {
                index: xs.$firstOne().content.index
            }
        })
    }
})
export class BlackHoleMagic extends MagicEntity {
    static cardCode = '7';
    static cardName = 'BlackHoleMagic'
}


