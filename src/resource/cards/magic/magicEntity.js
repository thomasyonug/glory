import {CardEntity} from '../cardEntity'



export class MagicEntity extends CardEntity{
    type = 'Magic';
    effect = '';


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