import React from 'react';

import {Icon} from 'antd';
import './style.scss';

export default () => {
  return (
    <div className="basic-footer">
      <div className="copyright">Copyright <Icon type="copyright" /> 2018 bugong</div>
    </div>
  );
};