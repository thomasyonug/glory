import {
    TestMonster,
    SunfeiMonster,
    godMonster
} from './monster'

import {TestTrap}    from './trap'
import {
    TestMagic,
    FireBallMagic,
    BlackHoleMagic
}   from './magic'









export default new Map([
    [TestMonster.cardCode, TestMonster],                              //1
    [TestTrap.cardCode, TestTrap],                                    //2
    [TestMagic.cardCode, TestMagic],                                  //3
    [SunfeiMonster.cardCode, SunfeiMonster],                          //4
    [godMonster.cardCode, godMonster],                                //5
    [FireBallMagic.cardCode, FireBallMagic],                          //6
    [BlackHoleMagic.cardCode, BlackHoleMagic]                         //7
])

