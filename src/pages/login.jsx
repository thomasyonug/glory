import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './login.css'

@CSSModules(styles)
export default class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {username:'',password:''}
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

    login = () => {
        const {
            username,
            password
        } = this.state
        this.$http.post('/public/login', {username, password}).then(json => {
            window.location = '#/start'
        })
    }

    handleUserName = (e) => {
        this.setState({username: e.target.value})
    }

    handlePassWord = (e) => {
        this.setState({password: e.target.value})
    }

}