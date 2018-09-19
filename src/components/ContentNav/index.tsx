import React, { Component } from 'react';
import { Colors, Styles } from '../../constants';
import { SbNavLink } from '../SbNavLink';
import { ChevronDown, ChevronUp } from 'react-feather';

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
      let isItemActive = false;
      if (item.subItems) {
        item.subItems = item.subItems.map((subItem: SubItem) => {
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

  expand(event: React.MouseEvent<SVGElement>, name: string) {
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
              ul {
                list-style-type: none;
                padding-left: 0;
              }
              .expanded {
                height: auto;
              }
              :not(.expanded) {
                height: 0;
                overflow: hidden;
              }
            `}</style>
          </ul>
        );
      }
      const down = (
        <ChevronDown
          onClick={e => {
            this.expand(e, name);
          }}
        />
      );
      const up = (
        <ChevronUp
          onClick={e => {
            this.expand(e, name);
          }}
        />
      );

      return (
        <div>
          <li
            className={`sub-list ${expanded && 'expanded'} `}
            key={name}
            onClick={() => this.itemClicked(name)}
            role="menuitem"
          >
            <div className={`${active && 'active'}`}>
              <div className="item-content">
                {name}
                {subs && (expanded ? up : down)}
              </div>
            </div>
            {subs}
            <style jsx>{`
              li {
                position: relative;
                display: flex;
                flex-direction: column;
                border-style: solid;
                border-width: 1px 0 0 0;
                font-size: 24px;
                font-weight: bold;
                text-indent: 0.25em;
                z-index: 0;
              }
              .item-content {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin: 0.5em 0;
              }
              .svg {
                z-index: 1;
              }
              .active :after {
                z-index: -1;
                position: absolute;
                content: '';
                height: calc(2em / ${Math.SQRT2} + 3px);
                width: calc(2em / ${Math.SQRT2} + 3px);
                right: calc(-1 * calc(calc(2em / ${Math.SQRT2}) / 2) - 3px);
                top: calc(calc(2em / ${Math.SQRT2}) / 2 - 10px);
                border-right: 2px solid #000000;
                border-top: 2px solid #000000;
                background-color: ${Colors.sbWhite};
                transform: rotate(45deg);
              }
              :not(.active) {
                background-color: ${Colors.sbWhite};
              }
            `}</style>
          </li>
        </div>
      );
    });
  }

  renderSubItems(subItems: SubItem[], parentName: string): JSX.Element[] {
    return subItems.map(({ name, active }: SubItem) => (
      <li
        className={`${active && 'active'}`}
        onClick={e => {
          this.subItemClicked(e, name);
        }}
        key={`${parentName}-${name}`}
        role="menuitem"
      >
        {name}
        <style jsx>{`
          li {
            display: flex;
            align-items: center;
            color: ${Colors.sbBlueLighter};
            font-size: 16px;
            font-weight: normal;
            text-indent: 1em;
            height: 3em;
          }
          li :first-child {
            border-top: 1px solid #000;
          }
          p {
            display: inline-block;
          }
          .active {
            border-left: 3px solid ${Colors.sbBlueLighter};
            font-weight: bold;
          }
          :not(.active) {
            background-color: ${Colors.sbWhite};
          }
        `}</style>
      </li>
    ));
  }

  render() {
    return (
      <ul>
        {this.renderItems(this.state.items)}
        <style jsx>{`
          ul {
            list-style-type: none;
            padding-left: 0;
            border-width: 0 1px 1px 0;
            border-style: solid;
            width: 15em;
          }
        `}</style>
      </ul>
    );
  }
}
