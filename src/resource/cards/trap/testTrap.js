import {TrapEntity} from './trapEntity'
import {prototype} from 'decorators'

@prototype({
    describe: 'this is test trap',
    cardName: 'TestTrap'
})
export class TestTrap extends TrapEntity {
    static cardCode = '3';
    static cardName = 'TestTrap'
}


