
export default class Entity {


    startListen (channel) {
        this.socket.coreSocket.$on(channel, msg => {
            this[msg.type].call(this, msg)
        })
    }

}