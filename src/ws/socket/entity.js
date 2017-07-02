import wsConfig from '../config'
import {getSocket} from './socket'

// import io from 'socket.io-client'

export default class Entity {
    wsConfig;
    coreSocket;
    path;

    constructor (path) {
        Object.assign(this, {
            wsConfig,
            path
        })
    }

    handShake () {
        this.coreSocket = getSocket()
    }

}

