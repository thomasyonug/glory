import React from 'react';
import ReactDOM from 'react-dom';
import DialogCore from './dialogCore'





const mount = document.getElementById('dialog')
const curryFn = method => result => {
    ReactDOM.unmountComponentAtNode(mount) 
    method(result) 
}

export const $dialog = (renderFn = () => <div></div>, cb = () => {}, props = {}) => 
    new Promise((resolve, rej) => {

        ReactDOM.render(
            <DialogCore 
                resolve={curryFn(resolve)}
                rej={curryFn(rej)}
                renderFn={renderFn}
                {...props}
             />,
            mount,
            cb
        )
    })



export const $dialogConfirm = (content) => 
        $dialog(() => (
            <div>
                {content}
            </div>
        ))


export const $dialogAuto = content => 
        $dialog((dialogContext) => {

            setTimeout(() => {
                dialogContext.props.resolve()
            }, 2000)

            return (
                <div>
                    {content}
                </div>
            )
        }, () => {}, {simple: true})