import {CardEntity} from '../cardEntity'
import {propertiesCheck, prototype} from 'decorators'





@propertiesCheck({
    unStaticProperties: {
    }
})
@prototype({
    type: 'MAGIC'
})
export class MagicEntity extends CardEntity {

}
