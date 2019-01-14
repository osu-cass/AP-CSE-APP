import 'font-awesome/css/font-awesome.css';
import 'promise-polyfill/src/polyfill';
import 'typeface-pt-sans-caption/index.css';
import 'typeface-pt-serif/index.css';
import 'whatwg-fetch';
import 'url-search-params-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './pages';

// To support IE and older browsers we import
// polyfills for window.fetch and Promises
ReactDOM.render(<App />, document.getElementById('app'));
