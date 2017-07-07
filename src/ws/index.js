import {
    RoomSocket,
    GameSocket,
    ErrorSocket,
    ChatSocket
} from './socket'

import {
    RoomReceiver,
    ErrorReceiver,
    MetaReceiver,
    ChatReceiver
} from './receiver'

import {
    RoomApi,
    ChatApi
} from './api'



export default class Ws {
    roomSocket;
    gameSocket;
    errorSocket;

    roomApi;
    roomReceiver;
    errorReceiver;
    metaReceiver;

    constructor () {

        //socket
        this.roomSocket    = new RoomSocket()
        this.errorSocket   = new ErrorSocket()
        this.gameSocket    = new GameSocket()
        this.chatSocket    = new ChatSocket()

        //api
        this.roomApi       = new RoomApi(this.roomSocket)
        this.chatApi       = new ChatApi(this.chatSocket)

        //receiver
        this.roomReceiver  = new RoomReceiver(this.roomSocket)
        this.errorReceiver = new ErrorReceiver(this.errorSocket)
        this.metaReceiver  = new MetaReceiver(this.roomSocket)
        this.chatReceiver  = new ChatReceiver(this.chatSocket)
    }


    handShake () {
        this.roomSocket.handShake()
        this.gameSocket.handShake()
        this.errorSocket.handShake()
        this.chatSocket.handShake()
    }

    startListen () {
        this.roomReceiver.startListen('room')
        this.errorReceiver.startListen('err')
        this.metaReceiver.startListen('meta')
        this.chatReceiver.startListen('chat')
    }

}





