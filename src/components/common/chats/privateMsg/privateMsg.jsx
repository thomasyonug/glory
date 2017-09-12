import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './privateMsg.scss'

import {connect} from 'react-redux'

import {autobind} from 'core-decorators'


@connect(
  state => {
    return {
      friendsMsg: state.chat
    }
  }
)
@CSSModules(styles)
export class PrivateMsg extends Component {

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
          state
      } = this

      const {
          username,
          friendsMsg
      } = this.props

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
                  {
                    console.log(friendsMsg)
                  }
                  
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
                      <button onClick={event => this.send(username)}>发送</button>
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
      console.log("username3: " + username)
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