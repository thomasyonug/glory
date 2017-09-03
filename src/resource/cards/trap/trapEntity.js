import {CardEntity} from '../cardEntity'
import {propertiesCheck, prototype} from 'decorators'
import {
    TRAPABLE_BATTLEFIELD
} from 'reduxs/constant'




@propertiesCheck({
    unStaticProperties: {
        effect: Function
    }
})
@prototype({
    type: 'TRAP',
    inHandCardTarget (store) {
        store.dispatch({
            type: TRAPABLE_BATTLEFIELD
        })
    },
    inBattleFieldTarget (index) {
    }
})
export class TrapEntity extends CardEntity {

}