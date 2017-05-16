import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {Link} from 'react-router-dom'
import styles from './login.css'






@CSSModules(styles)
export default class Login extends Component{
    render(){
       
        return (
            // <div styleName=''>
            //     <div>
            //         <Link to={`/start`}>start</Link>
            //     </div>
                
            // </div>

            <form>
                <div>
                    <label >用户名:</label>
                    <input  name="username" />
                </div>
                <div>
                    <label >密码:</label>
                    <input  name="password" type="password"/>
                </div>
                <button>登陆</button>
            </form>
            
        )
    }
}