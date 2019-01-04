import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { HelpCircle, Home, Search, Eye, Grid } from 'react-feather';

import {
  Colors,
  Styles,
  iconStyle,
  mediaQueries,
  mobileIconStyle,
  SizeBreaks
} from '../../constants/style';
import { SearchBar } from '../SearchBar';
import { HeaderLogo, MainMenu } from './primitives';
import { MobileBreakSize, mediaQueryWrapper } from '../MediaQueryWrapper';

export const NavBar: React.SFC = () => {
  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center'
  };

  const handleRedirect = (search: string) => {
    window.location.assign(`/search?search=${search}`);
  };

  return (
    <header>
      <HeaderLogo />
      <nav>
        <div className="left-content">
          <MediaQuery minWidth={SizeBreaks.mobile}>
            <MainMenu />
          </MediaQuery>
        </div>
        <div className="right-content">
          <span className="right-spacing grow-search">
            <SearchBar onSearch={handleRedirect} />
          </span>
          <span className="right-spacing">
            <Link to="/help" style={linkStyle} aria-label="Help">
              <HelpCircle {...iconStyle} />
            </Link>
          </span>
        </div>
      </nav>
      <style jsx>{`
        header {
          display: flex;
          padding: ${Styles.paddingUnit} / 2;
          background-color: ${Colors.sbGrayLighter};
          box-shadow: ${Styles.shadow};
        }

        nav {
          display: flex;
          flex-grow: 1;
          font-family: ${Styles.sbSans};
          justify-content: space-between;
          padding: ${Styles.paddingUnit} / 2;
        }

        .right-spacing {
          margin-right: ${Styles.paddingUnit};
        }

        .left-content,
        .right-content {
          align-items: center;
          display: flex;
          justify-content: flex-end;
        }
        .right-content {
          flex-grow: 1;
        }

        @media ${mediaQueries.tabletAndMobile} {
          .grow-search {
            flex-grow: 1;
          }
          .right-spacing {
            margin-right: 10px;
          }
        }

        .hidden {
          visibility: hidden;
        }
      `}</style>
    </header>
  );
};

const noUnderline: React.CSSProperties = {
  textDecoration: 'none',
  color: Colors.sbGray
};

export const MobileNavBar: React.SFC = () => (
  <nav>
    <Link to="/" style={noUnderline}>
      <div>
        <Home {...mobileIconStyle} />
        Home
      </div>
    </Link>
    <Link to="/search" style={noUnderline}>
      <div>
        <Search {...mobileIconStyle} />
        Search
      </div>
    </Link>
    <Link to="/search" style={noUnderline}>
      <div>
        <Eye {...mobileIconStyle} />
        Explore
      </div>
    </Link>
    <Link to="/resources" style={noUnderline}>
      <div>
        <Grid {...mobileIconStyle} />
        Resources
      </div>
    </Link>
    <style jsx>{`
      nav {
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-height: 40px;
        background-color: ${Colors.sbGrayLighter};
        width: 100vw;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.75em;
        padding: 3px;
      }
    `}</style>
  </nav>
);
export const MobileNavBarWrapped = mediaQueryWrapper(MobileNavBar, MobileBreakSize);
