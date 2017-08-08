import uuid              from 'uuid/v4'
import {propertiesCheck} from 'decorators'



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



