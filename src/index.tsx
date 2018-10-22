import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld } from './components/HelloWorld';
import { NavBar } from './components/NavBar';

// To support IE and older browsers we import
// polyfills for window.fetch and Promises
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

import 'typeface-pt-serif/index.css';
import 'typeface-pt-sans-caption/index.css';

ReactDOM.render(<HelloWorld name="Hello, World" />, document.getElementById('app'));
ReactDOM.render(
  <NavBar links={[]} siteName={'test'} mainContentId={'main'} />,
  document.getElementById('app')
);
