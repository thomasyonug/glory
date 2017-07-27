
import {MagicEntity} from './magicEntity'
import {prototype} from 'decorators'

@prototype({
    describe: '指定消灭一个场上怪物',
    cardName: 'FireBallMagic',
    effect () {
    }
})
export class FireBallMagic extends MagicEntity {
    static cardCode = '6';
    static cardName = 'FireBallMagic'
}


