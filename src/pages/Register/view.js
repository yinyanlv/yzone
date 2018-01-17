import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import {Form, Icon, Button, Input} from 'antd';

import '../Login/style.scss';
import {register} from './actions';

const FormItem = Form.Item;

class Register extends React.Component {

  constructor(props, context) {

    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }

  componentDidMount() {

    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {

    this.context.store.unsubscribe(this.onChange);
  }

  getOwnState() {

    return this.context.store.getState()['register'];
  }

  onChange() {

    this.setState(this.getOwnState());
  }

  handleSubmit(e) {

    e.preventDefault();

    this.props.form.validateFields((err, params) => {
      if (!err) {
        let action = register(params);

        this.context.store.dispatch(action);
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
                  getFieldDecorator('repeatPassword', {
                    rules: [{
                      required: true,
                      message: '密码为必填项'
                    }]
                  })(
                    <Input type="password" prefix={<Icon type="lock" />} placeholder="请再次输入密码" />
                  )
                }
              </FormItem>
              <FormItem>
                {
                  getFieldDecorator('email', {
                    rules: [{
                      required: true,
                      message: '邮箱为必填项'
                    }]
                  })(
                    <Input type="email" prefix={<Icon type="mail" />} placeholder="请输入邮箱" />
                  )
                }
              </FormItem>
              <FormItem style={
              {marginBottom: '5px'}
              }>
                <Button type="primary" className="btn-login" htmlType="submit">{ this.state.status === 'loading' ? '注册中...' : '注册'}</Button>
              </FormItem>
              <FormItem style={
              {marginBottom: 0}
              }>
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

export default RegisterWrapper;