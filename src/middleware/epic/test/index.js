



export default action$ =>
  action$.filter(action => action.type === 'test')
    // .mergeMap(action => {
    //     console.log('epic')
    // })
    .map(action => {

        return {
            type: 'fuck test'
        }
    })