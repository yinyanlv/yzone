import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Icon, List, Card} from 'antd';

import './style.scss';

class ModuleList extends React.Component {

  list = [{
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功功能介绍这介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }, {
    title: '这里是标题',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '这里是功能介绍，这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍这里是功能介绍'
  }];

  constructor() {
    super();
  }

  render() {

    return (
      <div className="basic-content">
        <div className="list-wrapper">
          <List
            rowKey="id"
            grid={{gutter: 24, lg: 4, md: 3, sm: 1, xs: 1}}
            dataSource={this.list}
            renderItem={
              item => {
                return (
                  <List.Item>
                    <Card hoverable>
                      <Card.Meta
                        avatar={<img alt="" className="avatar" src={item.imgUrl} />}
                        title={<a href="#">{item.title}</a>}
                        description={item.description}
                      />
                    </Card>
                  </List.Item>
                );
              }
            }
          />
        </div>
      </div>
    );
  }
}

export default connect()(ModuleList);