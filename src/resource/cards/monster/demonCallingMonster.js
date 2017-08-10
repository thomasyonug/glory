import {MonsterEntity} from './monsterEntity'
import {prototype} from 'decorators'
import {
    DROP_MONSTER_CARDS_FROM_BATTLEFIELD,
    DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD
} from 'reduxs/constant'


@prototype({
    describe: '恶魔的召唤',
    cardName: 'demonCalling',
    attack: 2500,
    defensive: 2000,
    appearance (store, action) {
        const {
            card
        } = action.content

        const stateSnapshot = store.getState()
        let cards

        if (action.type === 'get_card_from_hand_to_battle') {
            cards = stateSnapshot.battleField.firstAreaCards
        } else {
            cards = stateSnapshot.e_battleField.firstAreaCards
        }

        const choosenCard = cards.$random().filter(item => item !== null && item !== card)[0]

        if (!choosenCard) { return }
        const type = action.type === 'get_card_from_hand_to_battle' ? DROP_MONSTER_CARDS_FROM_BATTLEFIELD : DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD

        store.dispatch({
            type,
            content: {
                index: cards.findIndex(item => item === choosenCard)
            }
        })
    }
})
export class DemonCallingMonster extends MonsterEntity {
    static cardCode = '9';
    static cardName = 'demonCalling'

    validateAttackTimes = 1;
}


