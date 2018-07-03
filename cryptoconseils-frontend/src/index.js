import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer/Footer';

import registerServiceWorker from './registerServiceWorker';
require('dotenv').config()

/*import Header from './Header/Header'

ReactDOM.render(<Header />, document.getElementById('header'));
registerServiceWorker();
*/
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
