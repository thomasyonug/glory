import {rootSocket} from './connect'
import Rx from 'rxjs'



export const getRooms$ = Rx.Observable.create(observer => {
    rootSocket.on('getRooms', data => {
        observer.next(data)
    })
    rootSocket.emit('getRooms')
})

export const joinRoomFn = msg => Rx.Observable.create(observer => {
    rootSocket.emit('joinRoom', msg)
    observer.complete()
})

export const createRoomFn = msg => Rx.Observable.create(observer => {
    rootSocket.emit('createRoom', msg,(msg) => {
        observer.next(msg)
        observer.complete()
    })
})

export const joinRoom$ = Rx.Observable.create(observer => {
    rootSocket.on('joinRoom', data => {
        observer.next(data)
        // observer.complete()
    })
})


export const leaveRoomFn = Rx.Observable.create(observer => {
    rootSocket.emit('leaveRoom')
    observer.complete()
})
// export const getRooms$ = (() => {
//     const subject = new Rx.Subject()
//     rootSocket.on('getRooms', data => {
//         console.log(data, 'fuck')
//         subject.onNext(data)
//     })
//     return subject
// })()