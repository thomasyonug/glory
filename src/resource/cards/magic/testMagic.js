import {MagicEntity} from './magicEntity'
import {prototype} from 'decorators'

@prototype({
    describe: 'this is test magic',
    cardName: 'testMagic',
    effect () {
        console.log('effect start testMagic !!!!!!!!!1')
    }
})
export class TestMagic extends MagicEntity {
    static cardCode = '2';
    static cardName = 'testMagic'
}


