import {MonsterEntity} from './monsterEntity'
import {prototype} from 'decorators'

@prototype({
    describe: '堕落天使',
    cardName: 'lostAngelMonster',
    attack: 1900,
    defensive: 1500,
    appearance (store, action) {
        const {
            card
        } = action.content

        const stateSnapshot = store.getState()
        let cards

        if (action.type === 'get_card_from_hand_to_battle') {
            cards = stateSnapshot.e_battleField.firstAreaCards
        } else {
            cards = stateSnapshot.battleField.firstAreaCards
        }

        const choosenCard = cards.$random().filter(item => item !== null && item !== card)[0]

        if (!choosenCard) { return }
        const type = action.type === 'get_card_from_hand_to_battle' ? DROP_MONSTER_CARDS_FROM_E_BATTLEFIELD : DROP_MONSTER_CARDS_FROM_BATTLEFIELD 

        store.dispatch({
            type,
            content: {
                index: cards.findIndex(item => item === choosenCard)
            }
        })

    }
})
export class LostAngelMonster extends MonsterEntity {
    static cardCode = '10';
    static cardName = 'lostAngelMonster'

    validateAttackTimes = 1;
}


