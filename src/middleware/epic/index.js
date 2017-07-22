import { combineEpics, createEpicMiddleware } from 'redux-observable';


import roundGuardEpic from './roundGuard'
import operatorsEpic  from './operators'
import testEpic       from './test'




const rootEpic = combineEpics(
    roundGuardEpic,
    ...operatorsEpic,
    testEpic
);



export default createEpicMiddleware(rootEpic)