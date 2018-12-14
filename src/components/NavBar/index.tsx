import React from 'react';
import { Colors, Styles, iconStyle, mediaQueries, SizeBreaks } from '../../constants';
import { MainMenu } from './MainMenu';
import { SearchBar } from '../SearchBar';
import { HelpCircle, Menu } from 'react-feather';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

/*tslint:disable: no-require-imports no-var-requires */
const sbLogo = require('@sbac/sbac-ui-kit/src/images/SmarterBalanced-Logo.png') as string;

export const HeaderLogo: React.SFC = () => (
  <a href="https://www.smarterbalanced.org/" target="_blank" rel="noopener noreferrer">
    <img alt="Smarter Balanced logo" src={sbLogo} className="sb-logo" />
    <style jsx>{`
      .sb-logo {
        width: 128px;
        padding: 3px ${Styles.paddingUnit} 3px 3px;
      }

      @media ${mediaQueries.tabletAndMobile} {
        .sb-logo {
          width: 100px;
        }
      }
    `}</style>
  </a>
);

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
