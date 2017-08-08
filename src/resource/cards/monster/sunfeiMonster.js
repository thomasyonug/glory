import {MonsterEntity} from './monsterEntity'
import {prototype} from 'decorators'

@prototype({
    describe: 'the last one in the big family ye, which can use 分分钟放弃考研 skill',
    cardName: 'sunfeiMonster',
    attack: 50,
    defensive: 50
})
export class SunfeiMonster extends MonsterEntity {
    static cardCode = '4';
    static cardName = 'sunfeiMonster'

}


