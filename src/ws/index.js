import {
    RoomSocket,
    GameSocket,
    ErrorSocket
} from './socket'

import {
    RoomReceiver,
    ErrorReceiver,
    MetaReceiver
} from './receiver'

import {RoomApi} from './api'



export default class Ws {
    roomSocket;
    gameSocket;
    errorSocket;

    roomApi;
    roomReceiver;
    errorReceiver;
    metaReceiver;

    constructor () {
        this.roomSocket    = new RoomSocket()
        this.errorSocket   = new ErrorSocket()
        this.gameSocket    = new GameSocket()


        this.roomApi       = new RoomApi(this.roomSocket)
        this.roomReceiver  = new RoomReceiver(this.roomSocket)
        this.errorReceiver = new ErrorReceiver(this.errorSocket)
        this.metaReceiver  = new MetaReceiver(this.roomSocket)
    }


    handShake () {
        this.roomSocket.handShake()
        this.gameSocket.handShake()
        this.errorSocket.handShake()
    }

    startListen () {
        this.roomReceiver.startListen()
        this.errorReceiver.startListen()
        this.metaReceiver.startListen()
    }

}





