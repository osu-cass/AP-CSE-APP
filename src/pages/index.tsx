import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { TargetPage } from './Target';
import { SearchPageRoute } from './Search';
import { HelpPage } from './HelpPage';
import { HomePage } from './Home';
import { DevelopmentPage } from './Development';

export const App: React.SFC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="full-page">
          <div className="nav-bar">
            <NavBar />
          </div>
          <div className="main-content" id="main-content-scroll">
            <Route exact path="/" component={HomePage} />
            <Route path="/target/:targetShortCode" component={TargetPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/search" component={SearchPageRoute} />
            <Route path="/development" component={DevelopmentPage} />
            <Route path="/help" component={HelpPage} />
          </div>
        </div>
      </BrowserRouter>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: PT Sans Caption;
        }

        .full-page {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          overflow-y: auto;
        }
      `}</style>
    </React.Fragment>
  );
};
