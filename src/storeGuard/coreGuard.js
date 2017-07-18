import {store} from '@/index'
import {autobind} from 'core-decorators'

export default class CoreGuard {
    __works = []
    __destory = null
    __cb = null


    constructor ({cb}) {
        Object.assign(this, {
            __cb: cb
        })
    }

    @autobind
    __drive () {
        this.__works.forEach(work => {
            work(store)
        })
    }


    @autobind
    guard () {
        this.__destory = store.subscribe(() => {
            if (this.__cb(store)) {
                this.__drive()
            }
        })
    }

    @autobind
    addWork (work) {
        this.__works.push(work)
    }

    @autobind
    unguard () {
        this.__destory()
        this.__works = []
    }
}