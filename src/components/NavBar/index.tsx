import React from 'react';
import { Colors, Styles } from '../../constants';
import { MainMenu, IconProps, IconStyle } from './MainMenu';
import { SbNavLink, SbNavlinkProps } from '../SbNavLink';
import { SearchBar } from '../SearchBar';
import { HelpCircle, Menu } from 'react-feather';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

/*tslint:disable: no-require-imports no-var-requires */
const sbLogo = require('@sbac/sbac-ui-kit/src/images/SmarterBalanced-Logo.png') as string;

export interface NavBarProps {
  siteName: string;
  mainContentId: string;
}

export const HeaderLogo: React.SFC = () => (
  <a href={'https://www.smarterbalanced.org/'}>
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

export const NavBar: React.SFC<NavBarProps> = props => {
  const noUnderline: React.CSSProperties = {
    textDecoration: 'none'
  };

  return (
    <header>
      <nav className="nav-container">
        <div className="left-content">
          <HeaderLogo />
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
              <HelpCircle {...IconStyle} />
            </Link>
          </span>
          <MediaQuery minWidth={715}>
            <Link to="placeholder" style={noUnderline}>
              <Menu {...IconStyle} />
            </Link>
          </MediaQuery>
        </div>
      </nav>
      <style jsx>{`
        h1,
        h2,
        h3 {
          color: ${Colors.sbGray};
          letter-spacing: ${Styles.sbLetterSpacing};
          margin: 0 ${Styles.paddingUnit} / 2;
        }

        img {
          border-right: 1px solid ${Colors.sbGray};
          padding-right: ${Styles.paddingUnit};
          width: 183px;
        }

        .nav-container {
          background-color: ${Colors.sbGrayLighter};
          box-shadow: ${Styles.shadow};
          display: flex;
          padding: ${Styles.paddingUnit} / 2;
          width: 100%;
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
