import React, {Component} from 'react'
import Styles             from './friendscol.scss'
import CSSModules         from 'react-css-modules'
import {connect}          from 'react-redux'
import {
  INIT_FRIENDS
} from 'reduxs/constant'

@connect(
  state => {
    return {
      allFriends: state.chat.allFriends,
      onlineFriends: state.chat.onlineFriends
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

    return (
      <div>
        
      </div>
    )
  }
}