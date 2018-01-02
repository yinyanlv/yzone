import React from 'react';
import {connect} from 'react-redux';

import {Form, Icon, Checkbox, Button, Input} from 'antd';
import './style.scss';

const FormItem = Form.Item;

class Login extends React.Component {

  constructor() {

    super();

    this.state = {
      isLogging: false
    };
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <div className="block-login">
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {
              getFieldDecorator('username', {
                rules: [{
                  required: true,
                  message: '用户名为必填项'
                }]
              })(
                <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: '密码为必填项'
                }]
              })(
                <Input prefix={<Icon type="lock" />} placeholder="请输入密码" />
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(
                <Checkbox>记住我</Checkbox>
              )
            }
            <a href="">忘记密码</a>
            <Button type="primary" htmlType="submit">登录</Button>
          </FormItem>
        </Form>
      </div>
    );
  }

  handleSubmit() {

  }
}

const LoginWrapper = Form.create()(Login);

export default connect()(LoginWrapper);