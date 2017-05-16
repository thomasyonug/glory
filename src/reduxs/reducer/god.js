import {
    ROUND_NAME_START,
    // ROUND_NAME_PLAY,
    // ROUND_NAME_END,
    ROUND_NAME_SILENT
} from 'reduxs/constant'


const initState = {
    roundCount: 0,
    round: ROUND_NAME_START,
    e_round: ROUND_NAME_SILENT
}



export default function God(state = initState, action) {
    return action
}
