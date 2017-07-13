import {CardEntity} from '../cardEntity'
import {propertiesCheck, prototype} from 'decorators'





@propertiesCheck({
    unStaticProperties: {
        effect: Function
    }
})
@prototype({
    type: 'TRAP'
})
export class TrapEntity extends CardEntity {

}