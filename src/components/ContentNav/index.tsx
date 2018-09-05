import React, { Component } from 'react';

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
    /*
    return items.map(({name, subItems}: Item, i: number) => {
      let subs: JSX.Element | undefined;

      if (subItems) subs = <ul>{this.constructSubItems(subItems)}</ul>;

      return (
        <li key={`item-${i}`}>
          <p>{ name }</p>
          {subs}
        </li>
      );
    });*/
  }

  renderItems(items: Item[]) {
    return items.map(({ name, subItems, expanded, active }: Item) => {
      let subs: JSX.Element | undefined;

      if (subItems) subs = <ul>{this.renderSubItems(subItems, name)}</ul>;

      return (
        <li key={name}>
          <p>{name}</p>
          {subs}
        </li>
      );
    });
  }

  renderSubItems(subItems: SubItem[], parentName: string): JSX.Element[] {
    return subItems.map(subItem => <li key={`${parentName}-${subItem.name}`}>{subItem.name}</li>);
  }

  render() {
    return <ul>{this.renderItems(this.state.items)}</ul>;
  }
}
