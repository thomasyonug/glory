import React, {Component} from 'react'





const httpObject = {
    post (url, body) {
        return fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body
        }).then(res => {
            return res.text()
        }).catch(err => {
            console.log(err)
        })
    }
} 




export const http = (Target) => {

    return class extends Component{
        render(){
            return (
                <Target 
                    {...this.props}
                    $http={httpObject}
                ></Target>
            )
        }

    }
}