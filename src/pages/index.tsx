import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { TargetPage } from './Target';
import { SearchPageRoute } from './Search';

export const App: React.SFC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={SearchPageRoute} />
          <Route path="/target/:targetShortCode" component={TargetPage} />
        </div>
      </BrowserRouter>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: PT Sans Caption;
        }
      `}</style>
    </React.Fragment>
  );
};
