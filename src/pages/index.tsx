import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { FooterWrapped } from '../components/Footer';
import { NavBar, MobileNavBarWrapped } from '../components/NavBar';
import { mediaQueries } from '../constants/style';
import { DevelopmentPage } from './Development';
import { HelpPage } from './Help';
import { HomePage } from './Home';
import { ResourcesPage } from './Resources';
import { SearchPageRoute } from './Search';
import { TargetPage } from './Target';

export const App: React.SFC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="full-page">
          <div className="nav-bar">
            <NavBar />
          </div>
          <Route exact path="/" component={HomePage} />
          <Route path="/target/:targetShortCode" component={TargetPage} />
          <Route path="/explore" component={SearchPageRoute} />
          <Route path="/resources" component={ResourcesPage} />
          <Route path="/development" component={DevelopmentPage} />
          <Route path="/help" component={HelpPage} />
          <FooterWrapped />
          <MobileNavBarWrapped />
        </div>
      </BrowserRouter>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: PT Sans Caption;
          position: fixed;
        }

        .full-page {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .nav-bar {
          position: fixed;
          width: 100%;
        }

        @media ${mediaQueries.mobile} {
          html,
          body {
            position: fixed;
          }
          .full-page {
            height: 100%;
            position: relative;
          }
        }
      `}</style>
    </React.Fragment>
  );
};
