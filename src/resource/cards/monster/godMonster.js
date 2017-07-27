import {MonsterEntity} from './monsterEntity'
import {prototype} from 'decorators'

@prototype({
    describe: '神',
    cardName: 'godMonster',
    attack: 999999,
    defensive: 999999
})
export class godMonster extends MonsterEntity {
    static cardCode = '5';
    static cardName = 'godMonster'

    validateAttackTimes = Infinity;
}


