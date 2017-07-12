import uuid from 'uuid/v4'
import {store} from '@/index'





export class CardEntity {
    instanceID;
    constructor({instanceID}){
        Object.assign(this, {
            instanceID: uuid()
        })
        //field check
        setTimeout(() => {
            [
                this.constructor.cardName,
                this.constructor.describe,
                this.constructor.type,
                this.constructor.cardCode
            ].forEach(item => {
                if (item !== undefined) { return }
                // throw new Error(`the ${new.target} field not found`)
                throw new Error(`the card ${this.constructor.name} field not found`)
            })
        }, 0)

    }

    get store () {
        return store
    }

}


