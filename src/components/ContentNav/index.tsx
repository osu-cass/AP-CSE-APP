import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { Colors, Styles } from '../../constants';
import { SbNavLink } from '../SbNavLink';
import { Item, ItemProps } from './Item';
import { SubItem, SubItemProps } from './SubItem';

/**
 * Properties for ContentNav
 * @export
 * @interface ContentNavProps
 */
export interface ContentNavProps {
  items: ItemProps[];
  activeElement?: string;
}

/**
 * Statefor ContentNav
 * @export
 * @interface ContentNavProps
 */
export interface ContentNavState {
  items: ItemProps[];
}

/**
 * Renders a content navigator for the target viewer.
 * @export
 * @class {ContentNav}
 * @param {ContentNavProps} item
 */
export class ContentNav extends Component<ContentNavProps, ContentNavState> {
  constructor(props: ContentNavProps) {
    super(props);
    this.state = {
      items: this.constructItems(this.props.items)
    };
  }

  constructItems(items: ItemProps[]): ItemProps[] {
    return items.map((item: ItemProps) => {
      const isActive = item.name === this.props.activeElement;
      let newItem = { ...item, active: isActive };
      let subItemIsActive = false;
      newItem.subItems = item.subItems.map(subItem => {
        subItemIsActive = `${item.name}-${subItem.name}` === this.props.activeElement;

        return { ...subItem, active: subItemIsActive };
      });

      newItem = { ...newItem, expanded: subItemIsActive };

      return newItem;
    });
  }

  subItemClicked = (event: React.MouseEvent<HTMLLIElement>, name: string) => {
    event.stopPropagation();
    Scroll.scroller.scrollTo(name, {
      duration: 0,
      delay: 0,
      smooth: false,
      containerId: 'content-frame',
      offset: -250
    });
    const newItems: ItemProps[] = this.state.items.map((item: ItemProps) => {
      let isItemActive = false;
      item.subItems = item.subItems.map((subItem: SubItemProps) => {
        const isActive = subItem.name === name;
        isItemActive = !isItemActive ? isActive : true;

        return { ...subItem, active: isActive };
      });

      return { ...item, active: isItemActive };
    });

    this.setState({
      items: newItems
    });
  };

  itemClicked = (event: React.MouseEvent<HTMLLIElement>, name: string) => {
    Scroll.scroller.scrollTo(name, {
      duration: 0,
      delay: 0,
      smooth: false,
      containerId: 'content-frame',
      offset: -225
    });
    const newItems: ItemProps[] = this.state.items.map((item: ItemProps) => {
      const isActive = item.name === name;
      let newSubItems: SubItemProps[] = [];
      if (item.subItems.length > 0) {
        newSubItems = item.subItems.map((subItem: SubItemProps) => ({ ...subItem, active: false }));
      }

      return { ...item, subItems: newSubItems, active: isActive };
    });

    this.setState({
      items: newItems
    });
  };

  expand = (event: React.MouseEvent<SVGElement>, name: string) => {
    event.stopPropagation();
    const newItems: ItemProps[] = this.state.items.map((item: ItemProps) => {
      const isExpanded = item.name === name ? !item.expanded : item.expanded;

      return { ...item, expanded: isExpanded };
    });

    this.setState({
      items: newItems
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="outer">
          <ul className="list" role="menu">
            {this.state.items.map(({ name, subItems, expanded, active }: ItemProps) => {
              return (
                <Item
                  name={name}
                  subItems={subItems}
                  expanded={expanded}
                  active={active}
                  activate={this.itemClicked}
                  expand={this.expand}
                  key={name}
                >
                  {subItems.length > 0 &&
                    subItems.map(subItem => {
                      return (
                        <SubItem
                          name={subItem.name}
                          active={subItem.active}
                          activate={this.subItemClicked}
                          key={`${name}-${subItem.name}`}
                        />
                      );
                    })}
                </Item>
              );
            })}
          </ul>
          <div className="buffer" />
        </div>
        <style jsx>{`
          * {
            font-family: 'PT Sans Caption';
          }
          ul {
            list-style-type: none;
            padding-left: 0;
            margin: 0;
            border-width: 0 1px 0 0;
            border-color: #000;
            border-style: solid;
            width: 100%;
          }
          .outer {
            display: flex;
            border-width: 0 0 0 0;
            border-color: #000;
            border-style: solid;
          }
          .buffer {
            min-width: 27px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
