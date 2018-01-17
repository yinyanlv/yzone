import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import axios from 'axios';
import {Form, Icon, Checkbox, Button, Input} from 'antd';

import './style.scss';

const FormItem = Form.Item;

class Login extends React.Component {

  constructor() {

    super();

    this.state = {
      isLogging: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <DocumentTitle title="登录">
        <div className="container">
          <div className="block-login">
            <div>
              <h2 className="title">yzone</h2>
            </div>
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
                    <Input type="password" prefix={<Icon type="lock" />} placeholder="请输入密码" />
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
                <Link to="/register" className="right">注册账号</Link>
              </FormItem>
              <FormItem style={
                {marginBottom: '5px'}
              }>
                <Button type="primary" className="btn-login" htmlType="submit">登录</Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </DocumentTitle>
    );
  }

  handleSubmit(e) {

    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      
      if (!err) {

        axios.post('http://localhost:8888/api/register', values)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }
}

const LoginWrapper = Form.create()(Login);

export default connect()(LoginWrapper);