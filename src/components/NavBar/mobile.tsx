import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Home, Search, Eye, Grid } from 'react-feather';
import { Colors, mobileIconStyle } from '../../constants';
import { MobileBreakSize, mediaQueryWrapper } from '../MediaQuery/MediaQueryWrapper';

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
    <Link to="/apps" style={noUnderline}>
      <div>
        <Grid {...mobileIconStyle} />
        Apps
      </div>
    </Link>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
        padding: 3px 10px;
        background-color: ${Colors.sbGrayLighter};
        bottom: 0;
        min-height: 40px;
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
export const MobileNavBarWrapped = mediaQueryWrapper(MobileNavBar, MobileBreakSize);
