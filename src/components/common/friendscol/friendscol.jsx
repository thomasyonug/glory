import React, {Component} from 'react'
import Styles             from './friendscol.scss'
import CSSModules         from 'react-css-modules'
import {connect}          from 'react-redux'
import { Collapse, Button, Icon } from 'antd'

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
        <Icon type="usergroup-add" onClick={this.addFriend} styleName="addBtn"/>
        <Collapse defaultActiveKey={['1']} >
          <Panel header="好友列表" key="1">
            {
              allFriends.map((item, index) =>
                 <div key={index}>
                  {item.username}<Icon type="user-delete" styleName="delBtn" onClick={() => this.delFriend(item.username)}/>
                </div>
              )
            }
          </Panel>
          <Panel header="在线好友" key="2">
            {
              onlineFriends.map((item, index) =>
                <div key={index}>
                  {item.username}<Icon type="user-delete" />
                </div>
              )
            }
          </Panel>
        </Collapse>
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
          this.$ws.FriendsApi.addFriend(state.username)
      })
      .catch(err => {
          console.log(err)
      }) 
  }

  delFriend (username) {
    this.$ws.FriendsApi.deleteFriend(username)
  }

}