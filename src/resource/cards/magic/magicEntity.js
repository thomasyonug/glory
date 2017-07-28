import {CardEntity} from '../cardEntity'
import {propertiesCheck, prototype} from 'decorators'





@propertiesCheck({
    unStaticProperties: {
        effect: Function
    }
})
@prototype({
    type: 'MAGIC',
    inHandCardTarget (store) {
        console.log('target')
    },
    inBattleFieldTarget (index) {
        
    }
})
export class MagicEntity extends CardEntity {

}
