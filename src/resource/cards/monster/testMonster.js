import {MonsterEntity} from './monsterEntity'



export class TestMonster extends MonsterEntity {
    static cardCode = 0;
    static describe = 'i am fucking describe';
    static cardName = 'i am fucking name';

    constructor(arg){
        super({
            ...arg,
            attack: 100,
            defence: 100
        })
    }
}