import { combineEpics, createEpicMiddleware } from 'redux-observable';


import roundGuardEpic from './roundGuard'
import testEpic       from './test'

const rootEpic = combineEpics(
    roundGuardEpic,
    testEpic
);



export default createEpicMiddleware(rootEpic)