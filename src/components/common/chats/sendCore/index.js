import React, {Component} from 'react'
import Styles from './sendCore.css'
import CSSModules from 'react-css-modules'

@CSSModules(Styles)
export default class SendCore extends Component {

    constructor (props) {
        super(props)
        this.state = {
            msg: ''
        }
    }

    render () {
        const {
            enterHandle,
            changeHandle,
            send,
            state
        } = this

        return (
            <div styleName="wrapper">
                <div styleName="per80">
                    <input 
                        type="text" 
                        placeholder="msg here" 
                        styleName="input" 
                        value={state.msg}
                        onKeyDown={enterHandle}
                        onChange={changeHandle}/>
                </div>
                <div styleName="per20">
                    <button onClick={send}>发送</button>
                </div>
            </div>
        )
    }

    changeHandle = e => {
        this.setState({
            msg: e.target.value
        })
    }

    send = () => {
        this.$ws.chatApi.common(this.state.msg)
        this.clearMsg()
        this.props.handleSroll()
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