import { combineEpics, createEpicMiddleware } from 'redux-observable';


import guardEpic      from './guard'
import operatorsEpic  from './operators'
import clickEpic      from './click'
import hookEpic       from './hook'
import testEpic       from './test'




const rootEpic = combineEpics(
    ...guardEpic,
    ...operatorsEpic,
    ...clickEpic,
    ...hookEpic,
    testEpic
);



export default createEpicMiddleware(rootEpic)