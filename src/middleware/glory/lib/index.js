import cardStoreLib     from './cardStore'
import handLib          from './hand'
import clickOutsideLib  from './clickOutside'
import battleLib        from './battle'


export default {
    ...cardStoreLib,
    ...handLib,
    ...clickOutsideLib,
    ...battleLib
}