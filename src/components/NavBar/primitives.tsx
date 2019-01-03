import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Eye, Grid } from 'react-feather';
import { Styles, mediaQueries, Colors, iconStyle } from '../../constants/style';

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

export interface MenuItemProps {
  name: string;
}

export const MenuItem: React.SFC<MenuItemProps> = ({ children, name }) => (
  <div>
    {children}
    <p>{name}</p>
    <style jsx>{`
      p {
        color: ${Colors.sbGray};
        margin-left: 5px;
      }
      div {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        margin-right: ${Styles.paddingUnit};
      }

      @media ${mediaQueries.tabletAndMobile} {
        p {
          display: none;
        }
      }
    `}</style>
  </div>
);

export const MainMenu: React.SFC = () => {
  const noUnderline: React.CSSProperties = {
    textDecoration: 'none'
  };

  return (
    <div className="main-menu">
      <Link to="/" style={noUnderline}>
        <MenuItem name="Home">
          <Home {...iconStyle} />
        </MenuItem>
      </Link>
      <Link to="/search" style={noUnderline}>
        <MenuItem name="Search">
          <Search {...iconStyle} />
        </MenuItem>
      </Link>
      <Link to="/explore?filter=open" style={noUnderline}>
        <MenuItem name="Explore">
          <Eye {...iconStyle} />
        </MenuItem>
      </Link>
      <Link to="/resources" style={noUnderline}>
        <MenuItem name="Resources">
          <Grid {...iconStyle} />
        </MenuItem>
      </Link>
      <style jsx>{`
        .main-menu {
          display: flex;
          flex-wrap: nowrap;
        }
      `}</style>
    </div>
  );
};
