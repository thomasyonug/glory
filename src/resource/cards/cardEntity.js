import uuid              from 'uuid/v4'
import {propertiesCheck} from 'decorators'
import {store}           from '@/index'
import {
    PUSH_MAGIC_TRIGGER,
    PUSH_TRAP_TRIGGER, 
    PUSH_ATTACK_TRIGGER,
    PUSH_EFFECT_TRIGGER,
    DELETE_MAGIC_TRIGGE,
    DELETE_TRAP_TRIGGER,
    DELETEE_ATTACK_TRIGGER,
    DELETE_EFFECT_TRIGGER
} from 'reduxs/constant'




@propertiesCheck({
    staticProperties: {
        // cardCode: String,
        cardName: String
    },
    unStaticProperties: {
        type: String,
        cardName: String,
        describe: String,
        inHandCardTarget: Function,
        inBattleFieldTarget: Function
    },
    setMagicTrigger (trigger) {
        store.dispatch({
            type: PUSH_MAGIC_TRIGGER,
            content: trigger
        })
    },
    deleteMagicTrigger (trigger) {
        store.dispatch({
            type: DELETE_MAGIC_TRIGGE,
            content: trigger
        })
    },
    setTrapTrigger (trigger) {
        store.dispatch({
            type: PUSH_TRAP_TRIGGER,
            content: trigger
        })
    },
    deleteTrapTrigger (trigger) {
        store.dispatch({
            type: DELETE_TRAP_TRIGGER,
            content: trigger
        })
    },
    setAttackTrigger (trigger) {
        store.dispatch({
            type: PUSH_ATTACK_TRIGGER,
            content: trigger
        })
    },
    deleteAttackTrigger (trigger) {
        store.dispatch({
            type: DELETEE_ATTACK_TRIGGER,
            content: trigger
        })
    }
})
export class CardEntity {
    instanceID;
    constructor(){
        Object.assign(this, {
            instanceID: uuid()
        })
    }
}



