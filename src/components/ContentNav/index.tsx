import React, { Component } from 'react';
import { Colors, Styles } from '../../constants';

export interface SubItem {
  active?: boolean;
  name: string;
}

export interface Item extends SubItem {
  expanded?: boolean;
  subItems?: SubItem[];
}

export interface ContentNavProps {
  items: Item[];
  activeElement?: string;
}

export interface ContentNavState {
  items: Item[];
}

export class ContentNav extends Component<ContentNavProps, ContentNavState> {
  constructor(props: ContentNavProps) {
    super(props);
    this.state = {
      items: this.constructItems(this.props.items)
    };
  }

  constructItems(items: Item[]): Item[] {
    return items.map((item: Item) => {
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

  subItemClicked(event: React.MouseEvent<HTMLLIElement>, name: string) {
    event.stopPropagation();
    const newItems: Item[] = this.state.items.map((item: Item) => {
      if (item.subItems) {
        item.subItems = item.subItems.map((subItem: SubItem) => {
          const isActive = subItem.name === name;

          return { ...subItem, active: isActive };
        });
      }

      return { ...item, active: false };
    });

    this.setState({
      items: newItems
    });
  }

  itemClicked(name: string) {
    const newItems: Item[] = this.state.items.map((item: Item) => {
      const isActive = item.name === name;
      let newSubItems: SubItem[] | undefined;
      if (item.subItems) {
        newSubItems = item.subItems.map((subItem: SubItem) => ({ ...subItem, active: false }));
      }

      return { ...item, subItems: newSubItems, active: isActive };
    });

    this.setState({
      items: newItems
    });
  }

  expand(event: React.MouseEvent<HTMLParagraphElement>, name: string) {
    event.stopPropagation();
    const newItems: Item[] = this.state.items.map((item: Item) => {
      const isExpanded = item.name === name ? !item.expanded : item.expanded;

      return { ...item, expanded: isExpanded };
    });

    this.setState({
      items: newItems
    });
  }

  renderItems(items: Item[]): JSX.Element[] {
    return items.map(({ name, subItems, expanded, active }: Item) => {
      let subs: JSX.Element | undefined;

      if (subItems) {
        subs = (
          <ul className={`sub-list ${expanded ? 'expanded' : 'collapsed'}`}>
            {this.renderSubItems(subItems, name)}
            <style jsx>{`
              .collapsed {
                height: 0;
                overflow: hidden;
              }
              .expanded {
                height: auto;
              }
            `}</style>
          </ul>
        );
      }

      return (
        <li key={name} onClick={() => this.itemClicked(name)} role="menuitem">
          <p>
            {name} {active ? ':)' : ''}
          </p>
          <p
            onClick={e => {
              this.expand(e, name);
            }}
            role="button"
          >
            >
          </p>
          {subs}
        </li>
      );
    });
  }

  renderSubItems(subItems: SubItem[], parentName: string): JSX.Element[] {
    return subItems.map(subItem => (
      <li
        onClick={e => {
          this.subItemClicked(e, subItem.name);
        }}
        key={`${parentName}-${subItem.name}`}
        role="menuitem"
      >
        {subItem.name} {subItem.active ? ':)' : ''}
      </li>
    ));
  }

  render() {
    return <ul>{this.renderItems(this.state.items)}</ul>;
  }
}
