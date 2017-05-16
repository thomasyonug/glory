import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {Link} from 'react-router-dom'
import styles from './login.css'






@CSSModules(styles)
export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state={username:'',password:''};
    }
    login() {
        let username = this.state.username;
        let password = this.state.password;
        alert("user: "+username + ",password: "+password)
    }
    handleUserName(e){
        this.setState({username: e.target.value});
    }
    handlePassWord(e){
        this.setState({password: e.target.value});
    }

    render(){
       
        return (
            // <div styleName=''>
            //     <div>
            //         <Link to={`/start`}>start</Link>
            //     </div>
                
            // </div>

            <form styleName="login_content">
                <div>
                    <label >用户名:</label>
                    <input  name="username" onChange={this.handleUserName.bind(this)} />
                </div>
                <div>
                    <label >密码:</label>
                    <input  name="password" type="password" onChange={this.handlePassWord.bind(this)} />
                </div>
                <button styleName="login_btn" onClick={this.login.bind(this)}>登陆</button>
            </form>
            
        )
    }
}