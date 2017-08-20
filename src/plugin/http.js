import { $dialogLoading } from './dialog'

function statusHandle (status) {
    switch(status){
        case 401:
            window.location = '#/login'
        break;
        default:
        break;
    }
}




export const $http = {
   async post (url, body, {loading=false}) {
        const dialogContext = await new Promise((resolve, reject) => $dialogLoading(loading, (dialogContext) => resolve(dialogContext)))
        const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'same-origin'
        })

        if(loading){
           $dialogLoading(loading);
        }
        statusHandle(res.status)

        const data = await res.json()

        if (data.errcode === 0) { 
            if(loading){
                dialogContext.props.resolve();
            }
            return data 
        } else if (data.errcode === 1 ) {
            
            return data
        } else {
            throw new Error(data)
        }
        
    }
} 



