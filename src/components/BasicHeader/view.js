import React from 'react';
import {Link} from 'react-router-dom';
import {Icon, Menu, Layout, Dropdown, Avatar} from 'antd';

import './style.scss';
import avatar from '../../assets/avatar.png';

export default class BasicHeader extends React.PureComponent {

  constructor() {
    super();
  }

  render() {
    const menu = (
      <Menu selectedKeys={[]}>
        <Menu.Item><Icon type="user" /> 个人中心</Menu.Item>
        <Menu.Item><Icon type="setting" /> 设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout"><Icon type="logout" /> 退出登录</Menu.Item>
      </Menu>
    );

    return (
      <header className="basic-header">
        <Layout.Header>
          <div className="left"><Link to="/" className="logo">yzone</Link></div>
          <div className="right">
            <Dropdown overlay={menu}>
              <span className="user">
                <Avatar size="small" className="avatar-wrapper" src={avatar} />
                <span className="username">bugong</span>
              </span>
            </Dropdown>
          </div>
        </Layout.Header>
      </header>
    );
  }
}