import io from 'socket.io-client'
import wsConfig from '../config'
import {store} from '@/index'


let socket = null;
export function getSocket () {
    if (!socket) {
        socket = io(wsConfig.wsUrl, {
            query: {
                token: store.getState().user.token
            }
        })
        middleware(socket)
    }
    return socket
}


function middleware (socket) {
    $emitFn(socket)
    $onFn(socket)
}

function $emitFn (socket) {
    const _emit = socket.emit        

    socket.constructor.prototype.$emit = function (...ev) {
        const [, param] = ev
        console.group('%c socket emit infomation', 'color: blue; font-size: 10px;')
            console.log(`nsp: ${this.nsp}`)
            console.log(`type: ${param && param.type}`)
            console.log(`content:`, param && param.content)
        console.groupEnd('socket emit infomation')
        return _emit.call(this, ...ev)
    }
}


function $onFn (socket) {
    const _on = socket.on

    socket.constructor.prototype.$on = function (...ev) {
        const [, cb] = ev

        ev[1] = msg => {
            if (msg.type === 'err') {
                console.group('%c socket receive error', 'color: red; font-size: 10px;')
                    console.log(`nsp: ${this.nsp}`)
                    console.log(`type: ${msg && msg.type}`)
                    console.log(`content: `, msg)
                console.groupEnd('socket receive error')
            } else {
                console.group('%c socket receive infomation', 'color: green; font-size: 10px;')
                    console.log(`nsp: ${this.nsp}`)
                    console.log(`type: ${msg && msg.type}`)
                    console.log(`content: `, msg)
                console.groupEnd('socket receive infomation')
            }
            cb(msg)
        }

        return _on.call(this, ...ev)
    }


}