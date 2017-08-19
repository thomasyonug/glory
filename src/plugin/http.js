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
       let _loading = ''
        const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'same-origin'
        })

        if(loading){
           _loading = $dialogLoading(loading);
        }
        statusHandle(res.status)

        const data = await res.json()

        if (data.errcode === 0) { 
            if(loading){
                console.log(_loading)
            }
            return data 
        } else if (data.errcode === 1 ) {
            
            return data
        } else {
            throw new Error(data)
        }
        
    }
} 



