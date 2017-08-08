import {MonsterEntity} from './monsterEntity'
import {prototype} from 'decorators'

@prototype({
    describe: 'i am fucking describe',
    cardName: 'TestMonster',
    attack: 100,
    defensive: 100
})
export class TestMonster extends MonsterEntity {
    static cardCode = '1';
    static cardName = 'TestMonster'

}


