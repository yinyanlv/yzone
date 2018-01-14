import React from 'react';
import {connect} from 'react-redux';
import {Layout} from 'antd';

import Search from '../../components/Search';
import './style.scss';

const {Header, Content, Footer, Sider} = Layout;

class Portal extends React.Component {

  render() {

    return (
      <Layout>
        <Sider style={{display: 'none'}}>
          here is sider
        </Sider>
        <layout>
          <Header>
            here is header
          </Header>
          <Content>
            <Search />
          </Content>
          <Footer>
            here is footer
          </Footer>
        </layout>
      </Layout>
    );
  }
}

export default connect()(Portal);