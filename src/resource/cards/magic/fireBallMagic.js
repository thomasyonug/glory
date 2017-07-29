import {MagicEntity} from './magicEntity'
import {prototype} from 'decorators'
import {
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD,
    DELETE_HANDCARDS,
    CLICK_E_BATTLE_FIELD
} from 'reduxs/constant'

@prototype({
    describe: '指定消灭一个场上怪物',
    cardName: 'FireBallMagic',
    effect (xs, store) {

        // const stateSnapshot = store.getState()
        // const {
        //     battleField,
        //     e_battleField
        // } = stateSnapshot
        
        const lastOneType = xs.$lastOne().type

        if (
            lastOneType !== CLICK_E_BATTLE_FIELD
        ) { return }



        store.dispatch(new window.Transer({
            type: DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD,
            content: {
                index: xs.$lastOne().content.index
            }
        }))

        return new window.Transer({
            type: DELETE_HANDCARDS, 
            content: {
                index: xs.$firstOne().content.index
            }
        })
    }
})
export class FireBallMagic extends MagicEntity {
    static cardCode = '6';
    static cardName = 'FireBallMagic'
}


