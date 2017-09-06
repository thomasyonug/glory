import {TrapEntity} from './trapEntity'
import {prototype} from 'decorators'

@prototype({
    describe: '受到攻击时破坏攻击怪兽',
    cardName: '爆裂装甲',
    setTrigger (store, action) {
        console.log('fuckfuckfuck')
    }
})
export class BurstArmorTrap extends TrapEntity {
    static cardCode = '12';
    static cardName = '爆裂装甲'
}


