import {store} from '@/index'



const illegal = (Target, name, descriptor) => {
    return () => {}
}




const methodCtrl = 
    ({validateRound = null, unvalidateRound = null}) => 
        (Target, name, descriptor) => {
            const oldValue = descriptor.value

            if (validateRound && unvalidateRound) { throw new Error('validateRound and unvalidateRound should not exist both') }
                

            descriptor.value = function (...args) {
                const currentRoundState = store.getState().god.roundState                                
                
                if (validateRound && !validateRound.includes(currentRoundState)) { return illegal(Target, name, descriptor) }
                if (unvalidateRound && unvalidateRound.includes(currentRoundState)) { return illegal(Target, name, descriptor) }
                

                return oldValue.call(this, ...args)
            }
            return descriptor
        }





export const roundCtrl = {
    methodCtrl
}

