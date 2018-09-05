import React from 'react';
import { Colors, Styles } from '../../constants';
import { MainMenu, IconProps } from './MainMenu';
import { SbNavLink, SbNavlinkProps } from '../SbNavLink';
import { SearchBar } from '../SearchBar';
import { HelpCircle, Menu } from 'react-feather';

/*tslint:disable: no-require-imports no-var-requires */
const sbLogo: string = require('@sbac/sbac-ui-kit/src/images/SmarterBalanced-Logo.png') as string;

export interface NavBarProps {
  links?: SbNavlinkProps[];
  siteName: string;
  mainContentId: string;
}

export const Logo = (): JSX.Element => (
  <div className="nav-titleGroup-item">
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="http://www.smarterbalanced.org/"
      title="Smarter Balanced Home"
    >
      <img alt="Smarter Balanced Logo" src={sbLogo} />
    </a>
    <style jsx>{`
      .nav-titleGroup {
        display: flex;
        flex-flow: row;
        align-items: center;
        flex-grow: 1;
      }
      img {
        width: 183px;
        padding-right: ${Styles.paddingUnit};
      }
    `}</style>
  </div>
);

export const NavBar = (props: NavBarProps): JSX.Element => {
  const IconAttributes: IconProps = {
    size: 40,
    color: Colors.sbGray
  };
  const help = <HelpCircle {...IconAttributes} />;
  const menu = <Menu {...IconAttributes} />;

  return (
    <header>
      <nav className="nav-container">
        <div className="left-content">
          <Logo />
          <MainMenu />
        </div>
        <div className="right-content">
          <span>
            <SearchBar />
          </span>
          <span>
            <SbNavLink url={'placeholder'} content={help} />
          </span>
          <span>
            <SbNavLink url={'placeholder'} content={menu} />
          </span>
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
          border-color: ${Colors.sbGrayLighter};
          border-radius: 0px;
          box-shadow: ${Styles.shadow};
          display: flex;
          justify-content: space-between;
          padding: ${Styles.paddingUnit} / 2;
        }

        .right-content * {
          margin: 0 0.5em;
        }

        .left-content,
        .right-content {
          align-items: center;
          display: flex;
          flex-flow: row;
          justify-content: space-between;
        }
      `}</style>
    </header>
  );
};
