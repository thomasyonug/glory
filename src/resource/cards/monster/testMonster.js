import {MonsterEntity} from './monsterEntity'



export class TestMonster extends MonsterEntity {
    static cardCode = 0;


    describe = 'i am fucking describe';
    name = 'i am fucking name';

    constructor(arg){
        super({
            ...arg,
            attack: 100,
            defence: 100
        })
    }
}