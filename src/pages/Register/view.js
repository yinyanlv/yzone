import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import {Form, Icon, Button, Input, Alert} from 'antd';

import '../Login/style.scss';
import {register} from './actions';
import {STARTED, FAILURE} from './status';

const FormItem = Form.Item;

class Register extends React.Component {

  constructor() {

    super(...arguments);

    this.checkPassword = this.checkPassword.bind(this);
    this.checkRepeatPassword = this.checkRepeatPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderMessage(message) {

    return (
      <Alert
        type="error"
        message={message}
        showIcon
        style={{
          marginBottom: '15px'
        }}
      />
    );
  }

  checkPassword(rule, val, callback) {

    let form = this.props.form;
    let password = form.getFieldValue('password');

    if (val && password && val !== password) {
      return callback('两次输入的密码不一致');
    } else {
      callback();
    }
  }

  checkRepeatPassword(rule, val, callback) {

    let form = this.props.form;
    let repeatPassword = form.getFieldValue('repeatPassword');

    if (val && repeatPassword && val !== repeatPassword) {
      callback('两次输入的密码不一致');
    } else {
      callback();
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, params) => {
      if (!err) {
        let action = register(params, this.props.history);
        this.props.submit(action);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <DocumentTitle title="注册">
        <div className="container">
          <div className="block-login">
            <div>
              <h2 className="title">yzone</h2>
            </div>
            <Form onSubmit={this.handleSubmit}>
              {
                this.props.status === FAILURE ? this.renderMessage(this.props.message || '该用户名已被注册') : null
              }
              <FormItem>
                {
                  getFieldDecorator('username', {
                    rules: [{
                      required: true,
                      message: '用户名为必填项'
                    }]
                  })(
                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                  )
                }
              </FormItem>
              <FormItem>
                {
                  getFieldDecorator('password', {
                    rules: [{
                      required: true,
                      message: '密码为必填项'
                    }, {
                      validator: this.checkRepeatPassword
                    }]
                  })(
                    <Input type="password" prefix={<Icon type="lock"/>} placeholder="请输入密码"/>
                  )
                }
              </FormItem>
              <FormItem>
                {
                  getFieldDecorator('repeatPassword', {
                    rules: [{
                      required: true,
                      message: '密码为必填项'
                    }, {
                      validator: this.checkPassword
                    }]
                  })(
                    <Input type="password" prefix={<Icon type="lock"/>} placeholder="请再次输入密码"/>
                  )
                }
              </FormItem>
              <FormItem>
                {
                  getFieldDecorator('email', {
                    rules: [{
                      required: true,
                      message: '邮箱为必填项'
                    }, {
                      type: 'email',
                      message: '邮箱格式不正确'
                    }]
                  })(
                    <Input prefix={<Icon type="mail"/>} placeholder="请输入邮箱"/>
                  )
                }
              </FormItem>
              <FormItem style={{marginBottom: '5px'}}>
                <Button type="primary" className="btn-login" htmlType="submit" loading={this.props.status === STARTED}>注册</Button>
              </FormItem>
              <FormItem style={{marginBottom: 0}}>
                <Link to="/login" className="right">使用已有账号登录</Link>
              </FormItem>
            </Form>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

Register.contextTypes = {
  store: PropTypes.object
};

const RegisterWrapper = Form.create()(Register);

function mapStateToProps(state, ownProps) {

  return {
    ...state['register']
  };
}

function mapDispatchToProps(dispatch, ownProps) {

  return {
    submit: (action) => {
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWrapper);