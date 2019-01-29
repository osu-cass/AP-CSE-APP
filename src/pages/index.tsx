import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { FooterWrapped } from '../components/Footer';
import { NavBar, MobileNavBarWrapped } from '../components/NavBar';
import { mediaQueries, Colors } from '../constants/style';
import { DevelopmentPage } from './Development';
import { HelpPage } from './Help';
import { HomePage } from './Home';
import { ResourcesPage } from './Resources';
import { SearchPageRoute } from './Search';
import { TargetPage } from './Target';
import { PdfDevPage } from './pdf-dev/pdf-dev';

export const App: React.SFC = () => {
  // tslint:disable:react-a11y-tabindex-no-positive
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="full-page">
          <div className="nav-bar" tabIndex={1} aria-label="Skip to main content" role="button">
            <a className="skip-main" href="#main">
              Skip to main content
            </a>
            <NavBar />
          </div>
          <Route exact path="/" component={HomePage} />
          <Route path="/target/:targetShortCode" component={TargetPage} />
          <Route path="/explore" component={SearchPageRoute} />
          <Route path="/resources" component={ResourcesPage} />
          <Route path="/development" component={DevelopmentPage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/pdf-dev/:targetShortCode" component={PdfDevPage} />
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

        a.skip-main {
          left: -999px;
          position: absolute;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -999;
        }

        a.skip-main:focus,
        a.skip-main:active {
          color: ${Colors.sbWhite};
          background-color: ${Colors.sbBlue};
          left: auto;
          top: auto;
          width: 15%;
          height: auto;
          overflow: auto;
          margin: 5px 40%;
          padding: 5px;
          border-radius: 15px;
          border: 4px solid ${Colors.sbBlueDarker};
          text-align: center;
          font-size: 1.2em;
          z-index: 999;
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
