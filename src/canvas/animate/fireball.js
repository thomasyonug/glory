import {
    getElPosition
} from 'util'

export async function fireball(payload) {
    const {
        ctx
    } = this

    const {
        xs
    } = payload

    const targetEl = xs.$lastOne().event.target
    const {x, y} = getElPosition(targetEl)
    
    return new Promise((resolve, rej) => {
        



        setTimeout(() => {
            resolve({})
        }, 3000)
    })
}




