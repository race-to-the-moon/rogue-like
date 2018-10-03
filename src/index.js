import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PhaserCode from './PhaserCode'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PhaserCode />, document.getElementById('root'));
registerServiceWorker();
