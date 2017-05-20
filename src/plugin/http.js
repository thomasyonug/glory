export const $http = {
   async post (url, body) {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body
        })
        const data = await res.text()
        return data
    }
} 



