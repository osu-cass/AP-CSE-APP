import React from 'react';
import { Colors, Styles, iconStyle, mediaQueries } from '../../constants';
import { Home, Search, Eye, Grid } from 'react-feather';
import { Link } from 'react-router-dom';

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
      <Link to="placeholder" style={noUnderline}>
        <MenuItem name="Home">
          <Home {...iconStyle} />
        </MenuItem>
      </Link>
      <Link to="placeholder" style={noUnderline}>
        <MenuItem name="Search">
          <Search {...iconStyle} />
        </MenuItem>
      </Link>
      <Link to="placeholder" style={noUnderline}>
        <MenuItem name="Explore">
          <Eye {...iconStyle} />
        </MenuItem>
      </Link>
      <Link to="placeholder" style={noUnderline}>
        <MenuItem name="Apps">
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
