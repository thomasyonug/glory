import {store} from '@/index'




const methodCtrl = 
    ({validateRound = null, unvalidateRound = null, illegalHandler = () => {}}) => 
        (target, name, descriptor) => {
            const oldValue = descriptor.value

            if (validateRound && unvalidateRound) { throw new Error('validateRound and unvalidateRound should not exist both') }
                

            descriptor.value = function (...args) {
                const currentRoundState = store.getState().god.roundState                                
                
                if (validateRound && !validateRound.includes(currentRoundState)) { return illegalHandler.call(target, currentRoundState) }
                if (unvalidateRound && unvalidateRound.includes(currentRoundState)) { return  illegalHandler.call(target, currentRoundState)}
                

                return oldValue.call(this, ...args)
            }
            return descriptor
        }





export const roundCtrl = {
    methodCtrl
}

