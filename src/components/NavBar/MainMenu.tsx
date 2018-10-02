import React from 'react';
import { Colors, Styles } from '../../constants';
import { SbNavLink } from '../SbNavLink';
import { Home, Search, Eye, Grid } from 'react-feather';
import { Link } from 'react-router-dom';

export interface MenuItemProps {
  name: string;
}

export interface IconProps {
  size: number;
  color: string;
}

export const IconStyle: IconProps = {
  size: 35,
  color: Colors.sbGray
};

export const MobileIconStyle: IconProps = {
  size: 25,
  color: Colors.sbGray
};

export const MenuItem: React.SFC<MenuItemProps> = props => (
  <div>
    {props.children}
    <p>{props.name}</p>
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

      @media (max-width: 950px) {
        p {
          display: none;
        }
      }
    `}</style>
  </div>
);

export const MainMenu = (): JSX.Element => {
  const noUnderline: React.CSSProperties = {
    textDecoration: 'none'
  };

  return (
    <div className="main-menu">
      <Link to="placeholder" style={noUnderline}>
        <MenuItem name="Home">
          <Home {...IconStyle} />
        </MenuItem>
      </Link>
      <Link to="placeholder" style={noUnderline}>
        <MenuItem name="Search">
          <Search {...IconStyle} />
        </MenuItem>
      </Link>
      <Link to="placeholder" style={noUnderline}>
        <MenuItem name="Explore">
          <Eye {...IconStyle} />
        </MenuItem>
      </Link>
      <Link to="placeholder" style={noUnderline}>
        <MenuItem name="Apps">
          <Grid {...IconStyle} />
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
