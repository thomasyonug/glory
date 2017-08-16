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
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            {/* <a styleName="login-form-forgot" href="">Forgot password</a> */}
                            <Button type="primary" htmlType="submit" styleName="login-form-button">
                                Log in
                            </Button>
                             Or <a href="">register now!</a> 
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        )
    }

    login = async (e) => {
        let data = {};
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                data = {password:values.password,username:values.userName}
            }
        });
        try {
            const json = await this.$http.post('/public/login', data)
            this.props.modifyLoginStatus(true)
            this.props.saveLoginToken(json.token)
            this.initSocket()
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