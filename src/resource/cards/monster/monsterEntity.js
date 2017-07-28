import {CardEntity} from '../cardEntity'
import {propertiesCheck, prototype} from 'decorators'


import {
    SUMMONABLE_BATTLEFIELD,
    ACTIVE_ATTACKABLE_E_BATTLEFIELD
} from 'reduxs/constant'

@propertiesCheck({
    unStaticProperties: {
        attack: Number,
        defensive: Number,
        validateAttackTimes: Number
    }
})
@prototype({
    type: 'MONSTER',
    inHandCardTarget (store) {
        store.dispatch({
            type: SUMMONABLE_BATTLEFIELD
        })
    },
    inBattleFieldTarget (store) {
        store.dispatch({
            type: ACTIVE_ATTACKABLE_E_BATTLEFIELD
        })
    }
})
export class MonsterEntity extends CardEntity{
}
