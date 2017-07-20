



export default action$ =>
  action$.filter(action => action.type === 'test')
    // .mergeMap(action => {
    //     console.log('epic')
    // })
    .map(action => {
        console.log(123)

        return {
            type: 'fuck test'
        }
    })