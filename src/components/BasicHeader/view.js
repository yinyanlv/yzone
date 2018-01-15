import React from 'react';

import {Icon, Menu, Layout, Dropdown} from 'antd';
import './style.scss';

export default class BasicHeader extends React.PureComponent {

  constructor() {
    super();
  }

  render() {
    const menu = (
      <Menu selectedKeys={[]}>
        <Menu.Item disabled><Icon type="user" />个人中心</Menu.Item>
        <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
      </Menu>
    );

    return (
      <Layout.Header>
        <div className="right">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">bugong</a>
          </Dropdown>
        </div>
      </Layout.Header>
    );
  }
}