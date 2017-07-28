import {CardEntity} from '../cardEntity'
import {propertiesCheck, prototype} from 'decorators'





@propertiesCheck({
    unStaticProperties: {
        effect: Function
    }
})
@prototype({
    type: 'TRAP',
    inHandCardTarget (store) {
        console.log('target')
    },
    inBattleFieldTarget (index) {
    }
})
export class TrapEntity extends CardEntity {

}