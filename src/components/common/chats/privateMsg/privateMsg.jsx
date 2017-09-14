import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './privateMsg.scss'

import {connect} from 'react-redux'

import {autobind} from 'core-decorators'
import { Icon, Input, Button } from 'antd'

@connect(
  state => {
    return {
      friendsMsg: state.chat.friendsMsg 
    }
  }
)
@CSSModules(styles)
export class PrivateMsg extends Component {

  constructor (props) {
      super(props)
      this.state = {
          msg: '',
          msgs:[]
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
          friendsMsg,
          dialogContext
      } = this.props

      return (
          <div styleName="chatInfoShow">
              <div styleName="chatInfoHead">
                <Icon type="close-circle-o" styleName="chatInfoDel" onClick={e => this.closeModel(dialogContext)}/>
                {username}
              </div>
              <div styleName="chatInfoShowMain" ref={scrollWrapper => this.scrollWrapper = scrollWrapper} >
                {
                  Object.keys(friendsMsg).map((msgItem) => 
                    friendsMsg[msgItem].map((item, index) => 
                      <div key={index}>
                            <span styleName="message">{item}</span>     
                      </div> 
                    )
                  )
                }
              </div>
              <div styleName="sendChatInfo">
                  <div styleName="per80">
                      <Input 
                          placeholder="Please input" 
                          type="text" 
                          value={state.msg}
                          onKeyDown={(e) => this.enterHandle(e)}
                          onChange={(e) => this.changeHandle(e)}/>
                  </div>
                  <div styleName="per20">
                      <Button type="primary" onClick={(e) => this.send(username)}>发送</Button>
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
    var  username = username || this.props.username
    if(username){
      this.$ws.chatApi.friendMsg(this.state.msg, username)
      this.clearMsg()
    }
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

  closeModel = (dialogContext) => {
    dialogContext.props.resolve()
  }
}