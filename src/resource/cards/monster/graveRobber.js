import {MonsterEntity} from './monsterEntity'
import {prototype} from 'decorators'

@prototype({
    describe: '死亡后抽取一张牌',
    cardName: 'graveRobberMonster',
    attack: 500,
    defensive: 500,
    deathwhisper (store, action) {
        const camp = this.camp

        if (camp === 'e') {
            store.dispatch(new window.Transer({
                glory: 'get_cards_from_store_to_hand'
            }))
        } else {
            store.dispatch(new window.Transer({
                glory: 'get_cards_from_e_store_to_e_hand'
            }))
        }

    }
})
export class GraveRobberMonster extends MonsterEntity {
    static cardCode = '11';
    static cardName = 'graveRobberMonster'

    validateAttackTimes = 1;
}


