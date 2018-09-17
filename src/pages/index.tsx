import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { TargetPage } from './Target';

export const App: React.SFC = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar links={[]} siteName={'test'} mainContentId={'main'} />
        <Route path="/" component={TargetPage} />
      </div>
    </BrowserRouter>
  );
};
