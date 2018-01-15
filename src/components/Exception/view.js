import React, {createElement} from 'react';
import {Button} from 'antd';

import './style.scss';

const metaMap = {
  403: {
    title: '403',
    description: '抱歉，你无权访问该页面'
  },
  404: {
    title: '404',
    description: '抱歉，你访问的页面不存在'
  },
  500: {
    title: '500',
    description: '抱歉，服务器出错了'
  },
};

export default ({type='404', title, description, actions, linkElement = 'a', ...rest}) => {
  return (
    <div className="exception" {...rest}>
      <div className="image-wrapper">
        <div className={`image image-${type}`}></div>
      </div>
      <div className="content">
        <h2>{title || metaMap[type].title}</h2>
        <div className="description">
          {description || metaMap[type].description}
        </div>
        <div className="actions">
          {
            actions || createElement(linkElement, {to: '/', href: '/'}, <Button type="primary">返回首页</Button>)
          }
        </div>
      </div>
    </div>
  );
};
