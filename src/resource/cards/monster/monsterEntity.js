import {CardEntity} from '../cardEntity'
import {propertiesCheck, prototype} from 'decorators'

@propertiesCheck({
    unStaticProperties: {
        attack: Number,
        defensive: Number,
        validateAttackTimes: Number
    }
})
@prototype({
    type: 'MONSTER'
})
export class MonsterEntity extends CardEntity{
}
