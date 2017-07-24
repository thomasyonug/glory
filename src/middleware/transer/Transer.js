import translator from './translator'
import {autobind} from 'core-decorators'






window.Transer = 
    class Transer {
        constructor (arg) {
            Object.assign(this, arg)
        }

        @autobind
        translate () {
            if (this.econtent) {
                return {
                    ...this,
                    type: translator.get(this.type),
                    glory: translator.get(this.glory),
                    content: this.econtent
                }
            } else {
                return {
                    ...this,
                    type: translator.get(this.type),
                    glory: translator.get(this.glory)
                }
            }
        }
    }