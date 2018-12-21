import React, { Component } from 'react';
import { Item, ItemProps } from './Item';
import { SubItem, SubItemProps } from './SubItem';
import { ItemSearch } from '@osu-cass/sb-components';

/**
 * Properties for ContentNav
 * @export
 * @interface ContentNavProps
 */
export interface ContentNavProps {
  items: ItemProps[];
  activeElement?: string;
  referenceContainer?: string;
  onSelect?: (contentKey: string | undefined) => void;
}

/**
 * Statefor ContentNav
 * @export
 * @interface ContentNavProps
 */
export interface ContentNavState {
  items: ItemProps[];
  scrollOffset: number | undefined;
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
      items: this.constructItems(this.props.items),
      scrollOffset: undefined
    };
  }

  componentDidMount() {
    if (!this.state.items[0].scrollOffset) {
      const titleContainer: HTMLElement | null = document.getElementById('titleContainer');
      if (titleContainer) {
        const offSetHeight = titleContainer.offsetHeight;

        if (offSetHeight !== this.state.scrollOffset) {
          this.setState({
            scrollOffset: (offSetHeight + 62) * -1
          });
        }
      }
    }
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

  subItemClicked = (name: string) => {
    let content: string | undefined;

    const newItems: ItemProps[] = this.state.items.map((item: ItemProps) => {
      let isItemActive = false;
      item.subItems = item.subItems.map((subItem: SubItemProps) => {
        const isActive = subItem.name === name;
        isItemActive = !isItemActive ? isActive : true;

        if (isItemActive) {
          content = item.contentKey;
        }

        return { ...subItem, active: isActive };
      });

      return { ...item, active: isItemActive };
    });

    if (this.props.onSelect) {
      this.props.onSelect(content);
    }

    this.setState({
      items: newItems
    });
  };

  itemClicked = (name: string) => {
    let content: string | undefined;

    const newItems: ItemProps[] = this.state.items.map((item: ItemProps) => {
      const isActive = item.name === name;
      let newSubItems: SubItemProps[] = [];
      let expanded = false;
      if (item.subItems.length > 0) {
        newSubItems = item.subItems.map((subItem: SubItemProps) => ({ ...subItem, active: false }));
      }
      if (isActive) {
        content = item.contentKey;
        expanded = !item.expanded;
      }

      return { ...item, expanded, subItems: newSubItems, active: isActive };
    });

    if (this.props.onSelect) {
      this.props.onSelect(content);
    }

    this.setState({
      items: newItems
    });
  };

  expand = (event: React.MouseEvent<SVGElement>, name: string) => {
    event.stopPropagation();
    this.textExpand(name);
  };

  textExpand = (name: string) => {
    const newItems: ItemProps[] = this.state.items.map((item: ItemProps) => {
      const isExpanded = item.name === name ? !item.expanded : false;

      return { ...item, expanded: isExpanded };
    });

    this.setState({
      items: newItems
    });
  };

  renderSubItems = (subItems: SubItemProps[]) => {
    const { scrollOffset } = this.state;
    if (subItems.length > 0) {
      return subItems.map((subItem: SubItemProps) => {
        return (
          <SubItem
            name={subItem.name}
            active={subItem.active}
            activate={this.subItemClicked}
            key={`${name}-${subItem.name}`}
            referenceContainer={this.props.referenceContainer}
            scrollOffset={scrollOffset || subItem.scrollOffset}
          />
        );
      });
    }

    return false;
  };

  render() {
    const stateScrollOffset = this.state.scrollOffset;

    return (
      <React.Fragment>
        <ul className="list" role="menu">
          {this.state.items.map(({ name, subItems, expanded, active, scrollOffset }: ItemProps) => (
            <Item
              name={name}
              subItems={subItems}
              expanded={expanded}
              active={active}
              activate={this.itemClicked}
              expand={this.expand}
              referenceContainer={this.props.referenceContainer}
              scrollOffset={stateScrollOffset ? stateScrollOffset : scrollOffset}
              key={name}
            >
              {this.renderSubItems(subItems)}
            </Item>
          ))}
        </ul>
        <div className="buffer" />
        <style jsx>{`
          * {
            font-family: 'PT Sans Caption';
          }
          ul {
            list-style-type: none;
            padding-left: 0;
            margin: 0;
            width: 100%;
          }
          .buffer {
            min-width: 27px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
