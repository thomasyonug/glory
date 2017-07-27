import {
    TestMonster,
    SunfeiMonster,
    godMonster
} from './monster'

import {TestTrap}    from './trap'
import {TestMagic}   from './magic'









export default new Map([
    [TestMonster.cardCode, TestMonster],
    [TestTrap.cardCode, TestTrap],
    [TestMagic.cardCode, TestMagic],
    [SunfeiMonster.cardCode, SunfeiMonster],
    [godMonster.cardCode, godMonster]
])

