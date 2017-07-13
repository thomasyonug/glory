import {CardEntity} from '../cardEntity'
import {propertiesCheck, prototype} from 'decorators'





@propertiesCheck({
    unStaticProperties: {
        effect: Function
    }
})
@prototype({
    type: 'MAGIC'
})
export class MagicEntity extends CardEntity {

}
