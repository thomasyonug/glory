import cardStoreLib     from './cardStore'
import handLib          from './hand'
import clickOutsideLib  from './clickOutside'



export default {
    ...cardStoreLib,
    ...handLib,
    ...clickOutsideLib
}