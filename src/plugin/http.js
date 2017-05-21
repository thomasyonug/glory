function statusHandle (status) {
    switch(status){
        case 401:
            window.location = '#/login'
    }
}




export const $http = {
   async post (url, body) {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'same-origin'
        })

        statusHandle(res.status)

        const data = await res.json()

        if (data.errcode === 0) { 
            return data 
        } else {
            throw new Error(data)
        }
        
    }
} 



