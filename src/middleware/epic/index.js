import { combineEpics, createEpicMiddleware } from 'redux-observable';


import guardEpic      from './guard'
import operatorsEpic  from './operators'
import testEpic       from './test'




const rootEpic = combineEpics(
    ...guardEpic,
    ...operatorsEpic,
    testEpic
);



export default createEpicMiddleware(rootEpic)