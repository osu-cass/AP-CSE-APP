// import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages';

// To support IE and older browsers we import
// polyfills for window.fetch and Promises
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

import 'typeface-pt-serif/index.css';
import 'typeface-pt-sans-caption/index.css';

ReactDOM.render(<App />, document.getElementById('app'));
