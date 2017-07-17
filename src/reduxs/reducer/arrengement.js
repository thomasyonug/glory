import {
    SET_CARDGROUPS,
    SET_USINGGROUP
} from 'reduxs/constant'

const initState = {
  cardGroups: [],
  usingGroup: {}
}

export default function arrengement (state = initState, action) {
  switch (action.type) {
    case SET_CARDGROUPS:
      return {
        ...state,
        cardGroups: action.content
      }

    case SET_USINGGROUP:
      return {
        ...state,
        usingGroup: action.content
      }

    default:
      return state
  }
}
