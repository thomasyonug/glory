import {CardEntity} from '../cardEntity'



export class MonsterEntity extends CardEntity{
    attack;
    defence;
    type = 'MONSTER';

    constructor(arg){
        super(arg)

        const {
            attack,
            defence
        } = arg

        Object.assign(this, {
            attack,
            defence
        })
    }
}