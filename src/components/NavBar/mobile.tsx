import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Home, Search, Eye, Grid } from 'react-feather';
import { MobileIconStyle } from '../NavBar/MainMenu';
import { Colors } from '../../constants';

const noUnderline: React.CSSProperties = {
  textDecoration: 'none',
  color: Colors.sbGray
};

export const MobileNavBar: React.SFC = () => (
  <nav>
    <Link to="placeholder" style={noUnderline}>
      <div>
        <Home {...MobileIconStyle} />
        Home
      </div>
    </Link>
    <Link to="placeholder" style={noUnderline}>
      <div>
        <Search {...MobileIconStyle} />
        Search
      </div>
    </Link>
    <Link to="placeholder" style={noUnderline}>
      <div>
        <Eye {...MobileIconStyle} />
        Explore
      </div>
    </Link>
    <Link to="placeholder" style={noUnderline}>
      <div>
        <Grid {...MobileIconStyle} />
        Menu
      </div>
    </Link>
    <Link to="placeholder" style={noUnderline}>
      <div>
        <Menu {...MobileIconStyle} />
        Menu
      </div>
    </Link>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
        padding: 3px 10px;
        background-color: ${Colors.sbGrayLighter};
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.75em;
      }
    `}</style>
  </nav>
);
