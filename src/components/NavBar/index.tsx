import React from 'react';
import { Colors, Styles, iconStyle } from '../../constants';
import { MainMenu } from './MainMenu';
import { SearchBar } from '../SearchBar';
import { HelpCircle, Menu } from 'react-feather';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

/*tslint:disable: no-require-imports no-var-requires */
const sbLogo = require('@sbac/sbac-ui-kit/src/images/SmarterBalanced-Logo.png') as string;

export const HeaderLogo: React.SFC = () => (
  <a href="https://www.smarterbalanced.org/">
    <img alt="Smarter Balanced logo" src={sbLogo} className="sb-logo" />
    <style jsx>{`
      .sb-logo {
        width: 128px;
        padding: 3px ${Styles.paddingUnit} 3px 3px;
      }

      @media (max-width: 500px) {
        .sb-logo {
          width: 100px;
        }
      }
    `}</style>
  </a>
);

export const NavBar: React.SFC = () => {
  const noUnderline: React.CSSProperties = {
    textDecoration: 'none'
  };

  return (
    <header>
      <HeaderLogo />
      <nav>
        <div className="left-content">
          <MediaQuery minWidth={715}>
            <MainMenu />
          </MediaQuery>
        </div>
        <div className="right-content">
          <span className="right-spacing grow-search">
            <SearchBar />
          </span>
          <span className="right-spacing">
            <Link to="placeholder" style={noUnderline}>
              <HelpCircle {...iconStyle} />
            </Link>
          </span>
          <MediaQuery minWidth={715}>
            <Link to="placeholder" style={noUnderline}>
              <Menu {...iconStyle} />
            </Link>
          </MediaQuery>
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

        @media (max-width: 500px) {
          .grow-search {
            flex-grow: 1;
          }
          .right-spacing {
            margin-right: 10px;
          }
        }
      `}</style>
    </header>
  );
};
