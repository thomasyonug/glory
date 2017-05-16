import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {Link} from 'react-router-dom'
import styles from './login.css'
import  'whatwg-fetch'

@CSSModules(styles)
export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {username:'',password:''};
    }
    login = () => {
        let username = this.state.username;
        let password = this.state.password;
        let data = { "username":username,"password":password };

        fetch('/api/login', {
          method: 'POST',
          body: data
        }).then(res => {
            return res.text()
        }).then(text => {
            console.log(text);
            window.location.href = "http://localhost:3000/#/game";
        })
    }
    handleUserName = (e) => {
        this.setState({username: e.target.value});
    }
    handlePassWord = (e) => {
        this.setState({password: e.target.value});
    }

    render(){
       
        return (
            // <div styleName=''>
            //     <div>
            //         <Link to={`/start`}>start</Link>
            //     </div>
                
            // </div>

            <div styleName="login_content">
                <div>
                    <label >用户名:</label>
                    <input  name="username" onChange={this.handleUserName} />
                </div>
                <div>
                    <label >密码:</label>
                    <input  name="password" type="password" onChange={this.handlePassWord} />
                </div>
                <button styleName="login_btn" onClick={this.login}>登陆</button>
            </div>
            
        )
    }
}