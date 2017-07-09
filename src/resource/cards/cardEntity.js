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
                this.name, 
                this.describe, 
                this.type
            ].forEach(item => {
                if (item) { return }
                throw new Error(`the ${new.target} field not found`)
            })
        }, 0)

    }

    get store () {
        return store
    }

}


