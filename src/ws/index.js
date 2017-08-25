import {
    RoomSocket,
    GameSocket,
    ErrorSocket,
    ChatSocket,
    FriendsSocket
} from './socket'

import {
    RoomReceiver,
    ErrorReceiver,
    MetaReceiver,
    ChatReceiver,
    GameReceiver,
    FriendsReceiver
} from './receiver'

import {
    RoomApi,
    ChatApi,
    GameApi
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
        this.friendsSocket = new FriendsSocket()

        //api
        this.roomApi       = new RoomApi(this.roomSocket)
        this.chatApi       = new ChatApi(this.chatSocket)
        this.gameApi       = new GameApi(this.gameSocket)

        //receiver
        this.roomReceiver  = new RoomReceiver(this.roomSocket)
        this.errorReceiver = new ErrorReceiver(this.errorSocket)
        this.metaReceiver  = new MetaReceiver(this.roomSocket)
        this.chatReceiver  = new ChatReceiver(this.chatSocket)
        this.gameReceiver  = new GameReceiver(this.gameSocket)
        this.friendsReceiver = new FriendsReceiver(this.friendsSocket)
    }


    handShake () {
        this.roomSocket.handShake()
        this.gameSocket.handShake()
        this.errorSocket.handShake()
        this.chatSocket.handShake()
        this.friendsSocket.handShake()
    }

    startListen () {
        this.roomReceiver.startListen('room')
        this.errorReceiver.startListen('err')
        this.metaReceiver.startListen('meta')
        this.chatReceiver.startListen('chat')
        this.gameReceiver.startListen('game')
        this.friendsReceiver.startListen('friends')
    }

}





