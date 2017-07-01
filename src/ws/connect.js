import wsConfig from './config'
import io from 'socket.io-client'

              
export default class RootSocket {
    io;
    wsConfig;
    coreSocket;

    constructor () {
        Object.assign(this, {
            io,
            wsConfig
        })
    }

    handShake () {
        this.coreSocket = io(wsConfig.wsUrl)
        this.decorateEmit()
    }

    decorateEmit () {
        const _emit = this.coreSocket.emit        


        this.coreSocket.constructor.prototype.$emit = function (...ev){
            const [, param] = ev
            console.group('%c socket emit infomation', 'color: blue; font-size: 10px;')
            console.log(`nsp: ${this.nsp}`)
            console.log(`type: ${param && param.type}`)
            console.log(`content:`, param && param.content)
            console.groupEnd('socket emit infomation')
            return _emit.call(this, ...ev)
        }
    }


}

