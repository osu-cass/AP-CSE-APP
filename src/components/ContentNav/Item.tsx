import React from 'react';
import { Colors, Styles } from '../../constants';
import { ChevronDown, ChevronUp } from 'react-feather';
import { SubItemProps } from './SubItem';

/**
 * Properties for Item
 * @export
 * @interface ContentNavProps
 */
export interface ItemProps extends SubItemProps {
  expanded?: boolean;
  subItems?: SubItemProps[];
  expand?: (e: React.MouseEvent<SVGElement>, n: string) => void;
  children?: JSX.Element[] | JSX.Element;
}

export interface ChevronProps {
  expanded?: boolean;
  expand?: (e: React.MouseEvent<SVGElement>, n: string) => void;
  itemName: string;
}

export const Chevron = ({ expanded, expand, itemName }: ChevronProps) => {
  if (expanded) {
    return (
      <ChevronUp
        onClick={e => {
          if (expand) expand(e, itemName);
        }}
      />
    );
  }

  return (
    <ChevronDown
      onClick={e => {
        if (expand) expand(e, itemName);
      }}
    />
  );
};

/**
 * Renders a single item within a content navigator.
 * @export
 * @function {Item}
 * @param {string} name
 * @param {boolean} [active]
 * @param {boolean} [expanded]
 * @param {(e: React.MouseEvent<SVGElement>, n: string) => void} [expand]
 * @param {(e: React.MouseEvent<HTMLLIElement>, n: string) => void} [activate]
 * @param {JSX.Element[]<LeftMouse> | JSX.Element} [children]
 */
export const Item = ({ name, active, activate, expanded, expand, children }: ItemProps) => {
  return (
    <li
      key={name}
      onClick={e => {
        if (activate) activate(e, name);
      }}
      role="menuitem"
    >
      <div className={active ? 'active' : ''}>
        <div className="item-content">
          {name}
          <div className="chevron">
            {children && <Chevron expanded={expanded} expand={expand} itemName={name} />}
          </div>
        </div>
      </div>
      {children}
      <style jsx>{`
        li {
          position: relative;
          display: flex;
          flex-direction: column;
          border-style: solid;
          border-width: 1px 0 0 0;
          font-size: 20px;
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
        .chevron {
          display: flex;
          align-items: center;
          margin: 0 5px;
          text-indent: 0;
        }
        .active :after {
          z-index: -1;
          position: absolute;
          content: '';
          height: calc(2em / ${Math.SQRT2} + 5px);
          width: calc(2em / ${Math.SQRT2} + 5px);
          right: calc(-1 * calc(calc(2em / ${Math.SQRT2}) / 2) - 3px);
          top: calc(calc(2em / ${Math.SQRT2}) / 2 - 8px);
          border-right: 1px solid #000000;
          border-top: 1px solid #000000;
          background-color: ${Colors.sbWhite};
          transform: rotate(45deg);
        }
      `}</style>
    </li>
  );
};
