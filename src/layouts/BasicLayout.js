import React from 'react';
import {connect} from 'react-redux';
import DocumentTitle from 'react-document-title';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {Layout, Icon} from 'antd';
import {BasicHeader} from '../components/BasicHeader';
import {BasicFooter} from '../components/BasicFooter';
import {ModuleList} from '../pages/ModuleList';

class BasicLayout extends React.PureComponent {

  constructor() {
    super();
  }

  getTitle() {

    return '标题';
  }

  render() {

    let layout = (
      <Layout>

      </Layout>
    );

    return (
      <DocumentTitle title={this.getTitle()}>
        <Layout style={{height: 'auto'}}>
          <BasicHeader/>
          <Layout.Content>
            <Route path="/module-list" component={ModuleList} />
          </Layout.Content>
          <BasicFooter/>
        </Layout>
      </DocumentTitle>
    );
  }
}

export default connect()(BasicLayout);

