import React from 'react';
import ReactDOM from 'react-dom';
import DialogCore from './dialogCore'





const mount = document.getElementById('dialog')
const curryFn = method => result => {
    ReactDOM.unmountComponentAtNode(mount) 
    method(result) 
}

export const $dialog = (renderFn = () => <div></div>) => 
    new Promise((resolve, rej) => {


        ReactDOM.render(
            <DialogCore 
                resolve={curryFn(resolve)}
                rej={curryFn(rej)}
                renderFn={renderFn}
             />,
            mount
        )
    })




