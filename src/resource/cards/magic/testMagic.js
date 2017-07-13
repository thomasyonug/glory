import {MagicEntity} from './magicEntity'
import {prototype} from 'decorators'

@prototype({
    describe: 'this is test magic',
    cardName: 'TestMagic'
})
export class TestMagic extends MagicEntity {
    static cardCode = '2';
    static cardName = 'TestMagic'
}


