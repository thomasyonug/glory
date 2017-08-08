

export class Ticker {
    queue = [];

    constructor () {}

    push (fn) {
        this.queue.push(fn)
    }
}