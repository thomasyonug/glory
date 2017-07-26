import {store} from '@/index'




export const attackCtrl = 
    ({validateRound = null, unvalidateRound = null, illegalHandler = () => {}, card = null}) => 
        (target, name, descriptor) => {
            const oldValue = descriptor.value

            if (
                (validateRound && unvalidateRound) || 
                (!card)
            ) { throw new Error('validateRound and unvalidateRound should not exist both') }


            descriptor.value = function (...args) {
                const stateSnapshot = store.getState()
                const currentRoundState = stateSnapshot.god.roundState                                
                const cardInstance = card.call(this, ...args)

                if (!cardInstance) return oldValue.call(this, ...args)

                if (
                    (cardInstance.validateAttackTimes < 1) ||
                    (validateRound && !validateRound.includes(currentRoundState)) ||
                    (unvalidateRound && unvalidateRound.includes(currentRoundState))
                ) {
                    return illegalHandler.call(target, currentRoundState, cardInstance.validateAttackTimes)
                }
                return oldValue.call(this, ...args)
            }
            return descriptor
        }





