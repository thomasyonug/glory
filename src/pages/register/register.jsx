import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './register.scss'
import {connect} from 'react-redux'
import * as ac from 'reduxs/actions'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

@connect(
    state => {
        return {
          
        }
    },
    dispatch => {
        return {
            
        }
    }
)
@CSSModules(styles)
class RegistrationForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            confirmDirty: false
        }
    }

    componentDidMount () {
    }

    render(){
        const { getFieldDecorator } = this.props.form

        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
          }
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 14,
              offset: 6,
            }
          }
        }

        return (
            <Form onSubmit={this.handleSubmit} >
               <FormItem
                {...formItemLayout}
                label="Username"
                hasFeedback
              >
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}/>
                )}
              </FormItem>

                <FormItem
                {...formItemLayout}
                label={(
                  <span>
                    Nickname&nbsp;
                    <Tooltip title="What do you want other to call you?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                )}
                hasFeedback
              >
                {getFieldDecorator('nickname', {
                  rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}/>
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Password"
                hasFeedback
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  }, {
                    validator: this.checkConfirm,
                  }],
                })(
                  <Input type="password"  prefix={<Icon type="lock" style={{ fontSize: 13 }} />} />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Confirm"
                hasFeedback
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: 'Please confirm your password!',
                  }, {
                    validator: this.checkPassword,
                  }],
                })(
                  <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} onBlur={this.handleConfirmBlur} />
                )}
              </FormItem>
    
              <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" >Register</Button>
              </FormItem>
            </Form>
        )
    }

    handleSubmit = async (e) => {
      let data = {};
      e.preventDefault();
      try {
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    data = values;
                }
            });
            const status = await this.$http.post('/public/register', data, {loading: true})
           if(status.success){
             window.location = '#/login'
           } else {
             this.$dialogAuto(status.errDetail)
           }
      } catch (err) {
          console.log(err)
      }
    }

    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value })
    }

    checkConfirm = (rule, value, callback) => {
      const form = this.props.form;
      if(value && this.state.confirmDirty){
        form.validateFields(['confirm'], { force:true })
      }
      callback();
    }

    checkPassword = (rules, value, callback) => {
      const form = this.props.form;
      if(value && value !== form.getFieldValue('password')){
        callback("Two passwords that you enter is inconsistent!")
      }else{
        callback();
      }
    }

}
const Register = Form.create()(RegistrationForm);
export default Register;