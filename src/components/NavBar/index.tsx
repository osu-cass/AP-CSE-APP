import React from 'react';
import { NavLink } from 'react-router-dom';
import { Colors, Styles } from '../../constants';
import { Home, Search, Grid, Eye } from 'react-feather';

/*tslint:disable: no-require-imports no-var-requires */
const sbLogo = require('@sbac/sbac-ui-kit/src/images/SmarterBalanced-Logo.png');

export interface SbNavlinkProps {
  url: string;
  name: string;
}

export interface NavBarProps {
  links?: SbNavlinkProps[];
  siteName: string;
  mainContentId: string;
}
/*
export class SbNavLink extends React.Component<SbNavlinkProps, {}> {
    removeFocus = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
        if (e.keyCode === 13) {
            const elem = e.target as HTMLElement;
            elem.blur();
            const body = document.getElementById('site-body');
            if (body) {
                body.scrollIntoView();
            }
        }
    };
    render() {
        return (

          <NavLink
            to={this.props.url}
            exact
            activeClassName="active"
            className="nav-linksGroup-item"
            onKeyUp={this.removeFocus}
          >
            <span className="" /> {this.props.name}
          </NavLink>

            <div></div>
        );
    }
}
*/

interface MenuItemProps {
  name: string;
  icon: JSX.Element;
}

class MenuItem extends React.Component<MenuItemProps> {
  render() {
    return (
      <div className="MenuItem">
        {this.props.icon}
        <p>{this.props.name}</p>
        <style jsx>{`
                    p {
                        color: ${Colors.sbGray};
                        float: right;
                    }
                    .MenuItem {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                    }
                `}</style>
      </div>
    );
  }
}

export class NavBar extends React.Component<NavBarProps, {}> {
  /*renderLinks() {
        const links = this.props.links;
        let content: JSX.Element | undefined;
        if (links) {
            const sbLinks = links.map((l, key) => <SbNavLink {...l} key={key} />);
            content = <div className="nav-linksGroup">{sbLinks}</div>;
        }

        return content;
    }*/
  handleKeyDown() {
    return 0;
  }
  render() {
    const iconSize = 40;

    return (
      <header role="navigation">
        <div id="skip-main" />
        <nav className="nav-container" role="navigation">
          <div className="nav-content container">
            <div className="nav-titleGroup">
              <div className="nav-titleGroup-item">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://www.smarterbalanced.org/"
                  title="Smarter Balanced Home"
                >
                  <img alt="Smarter Balanced Logo" src={sbLogo} />
                </a>
              </div>
            </div>
            <MenuItem icon={<Home color={Colors.sbGray} size={iconSize} />} name="Home" />
            <MenuItem icon={<Search color={Colors.sbGray} size={iconSize} />} name="Search" />
            <MenuItem icon={<Eye color={Colors.sbGray} size={iconSize} />} name="Explore" />
            <MenuItem icon={<Grid color={Colors.sbGray} size={iconSize} />} name="Apps" />
          </div>
        </nav>
        <style jsx>{`
                    .nav-container {
                        border-radius: 0px;
                        padding: ${Styles.paddingUnit}/2;
                        box-shadow: ${Styles.shadow};
                        background-color: ${Colors.sbGrayLighter};
                        border-color: ${Colors.sbGrayLighter};
                        display: flex;
                        justify-content: center;
                        position: relative;
                        margin: 0;
                        width: 100%;
                    }
                    .nav-content,
                    .nav-content.container {
                        align-content: flex-start;
                        align-items: center;
                        display: flex;
                        flex-flow: row;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        margin-bottom: 0;
                        margin-top: 0;
                        padding-top: 0;
                        padding-bottom: 0;
                        width: 100%;
                    }

                    .nav-titleGroup,
                    .nav-linksGroup {
                        display: flex;
                        flex-flow: row;
                        align-items: center;
                        flex-grow: 1;
                    }

                    .nav-linksGroup {
                        justify-content: flex-end;
                    }

                    .nav-linksGroup-item {
                        font-size: ${Styles.fontLarger};
                        color: ${Colors.sbBlue};
                        margin: ${Styles.paddingUnit}/2 ${Styles.paddingUnit};
                        white-space: nowrap;
                    /*&:hover {
                        text-decoration: none;
                    }*/
                    }
                    h1, h2, h3 {
                        margin: 0 ${Styles.paddingUnit}/2;
                        letter-spacing: ${Styles.sbLetterSpacing};
                        color: ${Colors.sbGray};
                    }
                    img {
                        width: 183px;
                        padding-right: ${Styles.paddingUnit};
                        border-right: 1px solid @sb-gray;
                    }
                `}</style>
      </header>
    );
  }
}
