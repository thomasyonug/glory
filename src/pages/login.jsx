import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './login.css'
import {connect} from 'react-redux'
import * as ac from 'reduxs/actions'

@connect(
    state => {
        return {}
    },
    dispatch => {
        return {
            modifyLoginStatus: content => dispatch(ac.modifyLoginStatusActionCreator(content)),
            saveLoginToken: content => dispatch(ac.saveLoginTokenActionCreator(content))
        }
    }
)
@CSSModules(styles)
export default class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {username:'', password:''}
    }

    render(){
        const {
            handleUserName,
            handlePassWord,
            login
        } = this

        return (
            <div styleName="login_content">
                <div>
                    <label >用户名:</label>
                    <input  name="username" onChange={handleUserName} />
                </div>
                <div>
                    <label >密码:</label>
                    <input  name="password" type="password" onChange={handlePassWord} />
                </div>
                <button styleName="login_btn" onClick={login}>登陆</button>
            </div>
        )
    }

    login = async () => {
        const {
            username,
            password
        } = this.state
        const json = await this.$http.post('/public/login', {username, password})
        this.props.modifyLoginStatus(true)
        this.props.saveLoginToken(json.token)
        this.initSocket()
        window.location = '#/search'
    }

    handleUserName = (e) => {
        this.setState({username: e.target.value})
    }

    handlePassWord = (e) => {
        this.setState({password: e.target.value})
    }
    

    initSocket () {
        this.$ws.handShake()
        this.$ws.startListen()
    }

}