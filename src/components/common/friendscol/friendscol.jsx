import React, {Component} from 'react'
import Styles             from './friendscol.scss'
import CSSModules         from 'react-css-modules'
import {connect}          from 'react-redux'
import { Collapse, Button } from 'antd'

import {autobind} from 'core-decorators'

@connect(
  state => {
    return {
      allFriends: state.friends.allFriends
      ,
      onlineFriends: state.friends.onlineFriends
    }
  }
)

@CSSModules(Styles)
export default class FriendsCol extends Component {
  render () {
    const {
      allFriends,
      onlineFriends
    } = this.props

    const Panel = Collapse.Panel

    return (
      <div styleName="Friends">
        <Collapse defaultActiveKey={['1']} onChange={() => this.callback(allFriends, onlineFriends)}>
          <Panel header="好友列表" key="1">
            <p></p>
          </Panel>
          <Panel header="在线好友" key="2">
            <p></p>
          </Panel>
        </Collapse>
        <Button type="primary" onClick={this.addFriend}>添加好友</Button>
      </div>
    )
  }

  @autobind
  addFriend () {
      const dialogFriendtRender = (dialogContext) => {
          return (
              <div onClick={dialogContext.warning}>
                  <input
                      type="text" 
                      placeholder="friend name"
                      onKeyDown={dialogContext.enterHandle}
                      value={dialogContext.state.username || ""}
                      ref={input => dialogContext.input = input}
                      onChange={(e) => dialogContext.setState({username: e.target.value})}
                  />
              </div>
          )
      } 
      this.$dialog(dialogFriendtRender, function(){this.input.focus()})
      .then(state => {
          if (!state.username) {
              return this.addFriend()
          }
          this.$ws.FriendsApi.addFriend({
              username: state.username
          })
      })
      .catch(err => {
          console.log(err)
      }) 
  }

  callback = (allFriends, onlineFriends) => {
    console.log(allFriends)
    console.log(`allFriends: ${onlineFriends}`)
  }

}