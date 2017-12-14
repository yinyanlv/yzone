import React from 'react';
import ReactDom from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import ClickCounter from './ClickCounter';

ReactDom.render(<ClickCounter />, document.getElementById('root'));

registerServiceWorker();