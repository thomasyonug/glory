import {
    TestMonster,
    SunfeiMonster,
    godMonster,
    BogManMonster,
    DemonCallingMonster,
    LostAngelMonster,
    GraveRobberMonster
} from './monster'




import {
    TestTrap,
    BurstArmorTrap
} from './trap'



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
    [BlackHoleMagic.cardCode, BlackHoleMagic],                        //7
    [BogManMonster.cardCode, BogManMonster],                           //8
    [DemonCallingMonster.cardCode, DemonCallingMonster],                //9
    [LostAngelMonster.cardCode, LostAngelMonster],                      //10
    [GraveRobberMonster.cardCode, GraveRobberMonster],                    //11
    [BurstArmorTrap.cardCode, BurstArmorTrap]                          //12
])

