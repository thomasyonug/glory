import translator from './translator'
import {autobind} from 'core-decorators'
import {deepSerialize} from 'util'





window.Transer = 
    class Transer {
        constructor (arg) {
            Object.assign(this, arg)
        }

        @autobind
        translate () {
            if (this.econtent) {
                return {
                    ...deepSerialize(this),
                    type: translator.get(this.type),
                    glory: translator.get(this.glory),
                    content: this.econtent
                }
            } else {
                return {
                    ...deepSerialize(this),
                    type: translator.get(this.type),
                    glory: translator.get(this.glory)
                }
            }
        }
    }