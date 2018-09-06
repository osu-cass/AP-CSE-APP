import React from 'react';
import { Colors } from '../../constants';
import { SbNavLink } from '../SbNavLink';
import { Home, Search, Eye, Grid } from 'react-feather';

export interface MenuItemProps {
  name: string;
  icon: JSX.Element;
}

export interface IconProps {
  size: number;
  color: string;
}

export const MenuItem = ({ icon, name }: MenuItemProps): JSX.Element => (
  <div>
    {icon}
    <p>{name}</p>
    <style jsx>{`
      p {
        color: ${Colors.sbGray};
        float: right;
        margin: 0 10px;
      }
      div {
        align-items: center;
        display: flex;
        float: left;
        justify-content: flex-end;
      }
    `}</style>
  </div>
);

export const MainMenu = (): JSX.Element => {
  const IconAttributes: IconProps = {
    size: 40,
    color: Colors.sbGray
  };
  const home = <MenuItem icon={<Home {...IconAttributes} />} name="Home" />;
  const search = <MenuItem icon={<Search {...IconAttributes} />} name="Search" />;
  const explore = <MenuItem icon={<Eye {...IconAttributes} />} name="Explore" />;
  const apps = <MenuItem icon={<Grid {...IconAttributes} />} name="Apps" />;

  return (
    <div className="main-menu">
      <SbNavLink url={'placeholder'} content={home} />
      <SbNavLink url={'placeholder'} content={search} />
      <SbNavLink url={'placeholder'} content={explore} />
      <SbNavLink url={'placeholder'} content={apps} />
      <style jsx>{`
        .main-menu {
          display: flex;
          flex-wrap: nowrap;
        }
      `}</style>
    </div>
  );
};
