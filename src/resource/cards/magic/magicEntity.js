import {CardEntity} from '../cardEntity'
import {propertiesCheck, prototype} from 'decorators'


import {
    ACTIVE_ATTACKABLE_E_BATTLEFIELD
} from 'reduxs/constant'


@propertiesCheck({
    unStaticProperties: {
        effect: Function
    }
})
@prototype({
    type: 'MAGIC',
    inHandCardTarget (store) {
        store.dispatch({
            type: ACTIVE_ATTACKABLE_E_BATTLEFIELD
        })
    },
    inBattleFieldTarget (index) {
    },
    effect (xs, store) {
        console.log('default effect')
    }
})
export class MagicEntity extends CardEntity {

}
