import { createEpicMiddleware } from 'redux-observable'
import epic from './epic'




export default {
    epicMiddleware: createEpicMiddleware(epic)
}
