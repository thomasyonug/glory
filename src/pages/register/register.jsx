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
                <Input type="password" />
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Confirm Password"
              hasFeedback
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.checkPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
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
                <Input />
              )}
            </FormItem>
  
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" >Register</Button>
            </FormItem>
          </Form>
        )
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }

}
const Register = Form.create()(RegistrationForm);
export default Register;