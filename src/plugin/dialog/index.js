import React from 'react';
import ReactDOM from 'react-dom';
import DialogCore from './dialogCore';
import { Spin } from 'antd';
import Styles from './dialogCore.scss'
import CSSModules from 'react-css-modules'
import {autobind} from 'core-decorators'





const mount = document.getElementById('dialog')
const curryFn = method => result => {
    ReactDOM.unmountComponentAtNode(mount) 
    method(result) 
}
const white = {background:"#e1e1e1",width:'400px',margin:'0 auto'}

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
                <div style={white}>
                    {content}
                </div>
            )
        }, () => {}, {simple: true})


export const $dialogLoading = (loading, callback) => 
        $dialog((dialogContext) => {

            callback(dialogContext)
           
            return (
                <Spin tip="Loading..." spinning={loading}>
                </Spin>
            )
        }, () => {}, {simple: true})

export const $dialogPrivateMsg = (function(){
    @CSSModules(Styles)
    class PrivateMsg extends React.Component {

        constructor (props) {
            super(props)
            this.state = {
                msg: ''
            }
            Object.assign(this, {})
        }

        render () {
        
            const {
                enterHandle,
                changeHandle,
                send,
                state,
                msgs,
                username
            } = this

            return (
                <div styleName="chatInfoShow">
                    <div styleName="chatInfoShowMain" ref={scrollWrapper => this.scrollWrapper = scrollWrapper} >
                        {/* {
                            msgs.map((msgItem,index) => 
                                <div key={index}>
                                    <span>{msgItem.from}:</span>     
                                    <span>{msgItem.text}</span>     
                                </div> 
                            )
                        } */}
                    </div>
                    <div styleName="sendChatInfo">
                        <div styleName="per80">
                            <input 
                                type="text" 
                                placeholder="msg here" 
                                styleName="input" 
                                value={state.msg}
                                onKeyDown={(e) => this.enterHandle(e)}
                                onChange={(e) => this.changeHandle(e)}/>
                        </div>
                        <div styleName="per20">
                            <button onClick={event => this.send("admin")}>发送</button>
                        </div>
                    </div>
                </div>
            )
        }

        @autobind
        componentDidUpdate () {
            this.scrollWrapper.scrollTop = this.scrollWrapper.scrollHeight 
        }

        changeHandle = e => {
            this.setState({
                msg: e.target.value
            })
        }

        send = (username) => {
            console.log(`username2: ${username}`)
            this.$ws.chatApi.friendMsg(this.state.msg, username)
            this.clearMsg()
        }

        clearMsg () {
            this.setState({
                msg: ''
            })
        }

        enterHandle = e => {
            if (e.keyCode === 13) {
                this.send()
            }
        }
    }

    return (msgs, username) => $dialog((dialogContext) => {
        return <PrivateMsg msgs={msgs} username={username}></PrivateMsg>
    }, () => {}, {simple: true})
})()