import React from 'react';
import ReactDom from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import Panel from './Panel';

ReactDom.render(<Panel />, document.getElementById('root'));

registerServiceWorker();