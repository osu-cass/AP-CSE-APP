import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld } from './components/HelloWorld';
import { NavBar } from './components/NavBar';

import 'typeface-pt-serif/index.css';
import 'typeface-pt-sans-caption/index.css';

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
ReactDOM.render(
  <NavBar links={[]} siteName={'test'} mainContentId={'main'} />,
  document.getElementById('app')
);
