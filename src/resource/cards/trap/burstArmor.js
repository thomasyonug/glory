import {TrapEntity} from './trapEntity'
import {prototype} from 'decorators'
import {
    PUSH_ATTACK_BEFORE_TRIGGER,
    DELETE_ATTACK_BEFORE_TRIGGER
} from 'reduxs/constant'

@prototype({
    describe: '受到攻击时破坏攻击怪兽',
    cardName: '爆裂装甲',
    setTrigger (store, action) {
        store.dispatch({
            type: PUSH_ATTACK_BEFORE_TRIGGER,
            content (arg,store) {
                debugger
                console.log(arg)
            }
        })
    }
})
export class BurstArmorTrap extends TrapEntity {
    static cardCode = '12';
    static cardName = '爆裂装甲'
}


