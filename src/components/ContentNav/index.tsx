import React, { Component } from 'react';
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
      if (item.subItems) {
        newItem.subItems = item.subItems.map(subItem => {
          subItemIsActive = `${item.name}-${subItem.name}` === this.props.activeElement;

          return { ...subItem, active: subItemIsActive };
        });

        newItem = { ...newItem, expanded: subItemIsActive };
      }

      return newItem;
    });
  }

  subItemClicked = (event: React.MouseEvent<HTMLLIElement>, name: string) => {
    event.stopPropagation();
    const newItems: ItemProps[] = this.state.items.map((item: ItemProps) => {
      let isItemActive = false;
      if (item.subItems) {
        item.subItems = item.subItems.map((subItem: SubItemProps) => {
          const isActive = subItem.name === name;
          isItemActive = !isItemActive ? isActive : true;

          return { ...subItem, active: isActive };
        });
      }

      return { ...item, active: isItemActive };
    });

    this.setState({
      items: newItems
    });
  };

  itemClicked = (event: React.MouseEvent<HTMLLIElement>, name: string) => {
    const newItems: ItemProps[] = this.state.items.map((item: ItemProps) => {
      const isActive = item.name === name;
      let newSubItems: SubItemProps[] | undefined;
      if (item.subItems) {
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
                {subItems && (
                  <ul className={`sub-list ${expanded ? 'expanded' : ''}`}>
                    {subItems.map(subItem => {
                      return (
                        <SubItem
                          name={subItem.name}
                          active={subItem.active}
                          activate={this.subItemClicked}
                          key={`${name}-${subItem.name}`}
                        />
                      );
                    })}
                  </ul>
                )}
              </Item>
            );
          })}
        </ul>
        <style jsx>{`
          * {
            font-family: 'PT Sans Caption';
          }
          ul {
            list-style-type: none;
            padding-left: 0;
            border-width: 0 1px 1px 0;
            border-style: solid;
            width: auto;
          }
          .sub-list {
            border: none;
            width: 100%;
          }
          .sub-list .expanded {
            height: auto;
          }
          .sub-list :not(.expanded) {
            display: none;
            height: 0;
            overflow: hidden;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
