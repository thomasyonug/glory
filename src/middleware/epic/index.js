import { combineEpics, createEpicMiddleware } from 'redux-observable';


import guardEpic      from './guard'
import operatorsEpic  from './operators'
import clickEpic      from './click'
import testEpic       from './test'




const rootEpic = combineEpics(
    ...guardEpic,
    ...operatorsEpic,
    ...clickEpic,
    testEpic
);



export default createEpicMiddleware(rootEpic)