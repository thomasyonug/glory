import translator from './translator'
import {autobind} from 'core-decorators'






window.Transer = 
    class Transer {
        constructor (arg) {
            Object.assign(this, arg)
        }

        @autobind
        translate () {
            return {
                ...this,
                type: translator.get(this.type),
                glory: translator.get(this.glory)
            }
        }
    }