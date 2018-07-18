import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer/Footer';
import JsFunction from './Home/JsFunction'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<JsFunction />, document.getElementById('JsScriptFiles'));
registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
