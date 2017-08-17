import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './login.scss'
import {connect} from 'react-redux'
import * as ac from 'reduxs/actions'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
const FormItem = Form.Item;
@connect(
    state => {
        return {
        }
    },
    dispatch => {
        return {
            modifyLoginStatus: content => dispatch(ac.modifyLoginStatusActionCreator(content)),
            saveLoginToken: content => dispatch(ac.saveLoginTokenActionCreator(content))
        }
    }
)
@CSSModules(styles)
class NormalLoginForm extends Component{
    componentDidMount () {
         if(localStorage.getItem('remember') == "true"){
            this.props.form.setFieldsValue({'userName':localStorage.getItem('userName')})
            this.props.form.setFieldsValue({'password':localStorage.getItem('password')})
            this.props.form.setFieldsValue({'remember':true})
         }else{
            this.props.form.setFieldsValue({'remember':false})
         }
    }

    render(){
        const {
            login
        } = this
        const { getFieldDecorator } = this.props.form

        return (
            <Row type="flex" justify="space-around" align="middle" styleName="login_page">
                <Col>
                    <Form onSubmit={this.login} styleName="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            {/* <a styleName="login-form-forgot" href="">Forgot password</a> */}
                            <Button type="primary" htmlType="submit" styleName="login-form-button">
                                Log in
                            </Button>
                             Or <a href="#/register">register now!</a> 
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        )
    }

    login = async (e) => {
        let data = {}, rememBer = '';
        e.preventDefault();
        try {
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    data = {password:values.password,username:values.userName}
                    rememBer = values.remember;
                    
                }
            });
            const json = await this.$http.post('/public/login', data)
            this.props.modifyLoginStatus(true)
            this.props.saveLoginToken(json.token)
            this.initSocket()
            console.log(rememBer)
            if(rememBer){
                localStorage.setItem('password', data.password);
                localStorage.setItem('userName', data.username);
                localStorage.setItem('remember', rememBer);
            }else{
                localStorage.setItem('password', '');
                localStorage.setItem('userName', '');
                localStorage.setItem('remember', rememBer);
            }
        } catch (err) {
            console.log(err)
        }
    }

    initSocket () {
        this.$ws.handShake()
        this.$ws.startListen()
    }

}
const Login = Form.create()(NormalLoginForm);
export default Login;