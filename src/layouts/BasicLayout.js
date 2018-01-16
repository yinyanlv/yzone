import React from 'react';
import {connect} from 'react-redux';
import DocumentTitle from 'react-document-title';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Layout} from 'antd';
import {BasicHeader} from '../components/BasicHeader';
import {BasicFooter} from '../components/BasicFooter';
import {ModuleList} from '../pages/ModuleList';

const pageTitleMap = [{
  path: '/app/module-list',
  title: '功能模块列表'
}];

class BasicLayout extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  getPageTitle() {
    const {location} = this.props;

    let item = pageTitleMap.filter((item) => {
      return item.path === location.pathname
    })[0];

    return item.title || 'yzone';
  }

  render() {

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <Layout style={{height: 'auto'}}>
          <BasicHeader/>
          <Layout.Content>
            <Switch>
              <Route path="/app/module-list" component={ModuleList}/>
              <Redirect to="/404" push/>
            </Switch>
          </Layout.Content>
          <BasicFooter/>
        </Layout>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);

