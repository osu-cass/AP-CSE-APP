import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { MobileNavBarWrapped, MobileNavBar } from '../components/NavBar/mobile';
import { TargetPage } from './Target';
import { SearchPageRoute } from './Search';
import { HelpPage } from './Help';
import { HomePage } from './Home';
import { AppsPage } from './Apps';
import { DevelopmentPage } from './Development';
import { TargetClient } from '../clients/target';
import { FooterWrapped } from '../components/Footer';
import { mediaQueries } from '../constants';

export const App: React.SFC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="full-page">
          <div className="nav-bar">
            <NavBar />
            <MobileNavBarWrapped />
          </div>
          <Route exact path="/" component={HomePage} />
          <Route path="/target/:targetShortCode" component={TargetPage} />
          <Route path="/search" component={SearchPageRoute} />
          <Route path="/apps" component={AppsPage} />
          <Route path="/development" component={DevelopmentPage} />
          <Route path="/help" component={HelpPage} />
          <FooterWrapped />
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

        @media ${mediaQueries.tabletAndMobile} {
          html,
          body {
            position: fixed;
          }
        }
      `}</style>
    </React.Fragment>
  );
};
