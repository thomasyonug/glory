import {MagicEntity} from './magicEntity'
import {prototype} from 'decorators'
import {
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_BATTLEFIELD,
    DELETE_HANDCARDS,
    CLICK_E_BATTLE_FIELD,
    CLICK_BATTLE_FIELD,
    CLICK_E_BATTLE_FIELD_EMPTY,
    CLICK_BATTLE_FIELD_EMPTY
} from 'reduxs/constant'

@prototype({
    describe: '消灭所有场上怪物',
    cardName: 'BlackHoleMagic',
    effect (xs, store) {

        const stateSnapshot = store.getState()
        const {
            battleField,
            e_battleField
        } = stateSnapshot
        
        const lastOneType = xs.$lastOne().type

        if (
            lastOneType !== CLICK_E_BATTLE_FIELD &&
            lastOneType !== CLICK_BATTLE_FIELD   &&
            lastOneType !== CLICK_E_BATTLE_FIELD_EMPTY &&
            lastOneType !== CLICK_BATTLE_FIELD_EMPTY
        ) { return }

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

        store.dispatch(new window.Transer({
            type: DELETE_HANDCARDS, 
            content: {
                index: xs.$firstOne().content.index
            }
        }))
    },
    animate_name: 'blackhole',
    isEffectTarget (actions, store, target) {
        if (target?.type === 'MONSTER') { return true }
        else { return false }
    }
})
export class BlackHoleMagic extends MagicEntity {
    static cardCode = '7';
    static cardName = 'BlackHoleMagic'
}


