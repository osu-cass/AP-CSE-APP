import React from 'react';
import { Colors, Styles } from '../../../constants';
import { ChevronDown, ChevronUp } from 'react-feather';
import { SubItemProps } from '../SubItem';

/**
 * Properties for Item
 * @export
 * @interface ContentNavProps
 */
export interface ItemProps extends SubItemProps {
  expanded?: boolean;
  subItems: SubItemProps[];
  expand?: (e: React.MouseEvent<SVGElement>, n: string) => void;
  children?: JSX.Element[] | JSX.Element | boolean;
}

export interface ChevronProps {
  expanded?: boolean;
  expand?: (e: React.MouseEvent<SVGElement>, n: string) => void;
  itemName: string;
}

export const Chevron: React.SFC<ChevronProps> = ({ expanded, expand, itemName }) => {
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
  // const itemHeight = '0.75em';
  const itemHeight = '3em';
  const sideLength = `calc(${itemHeight} / ${Math.SQRT2} + 3px)`;

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
      <ul className={`sub-list ${expanded ? 'expanded' : ''}`}>{children}</ul>
      <style jsx>{`
        * {
          font-family: ${Styles.sbSans};
        }
        li {
          position: relative;
          display: flex;
          flex-direction: column;
          border-style: solid;
          border-width: 0 0 1px 0;
          font-size: ${Styles.fontLarger};
          text-indent: 0.25em;
          z-index: 0;
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
          margin: 0;
        }
        .sub-list .expanded {
          height: auto;
        }
        .sub-list :not(.expanded) {
          display: none;
          height: 0;
          overflow: hidden;
        }
        .item-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin: 1em 0;
        }
        .chevron {
          display: flex;
          align-items: center;
          margin: -5px 5px;
          text-indent: 0;
        }
        .active :after {
          z-index: -1;
          position: absolute;
          content: '';
          height: ${sideLength};
          width: ${sideLength};
          right: calc(-1 * calc(calc(${itemHeight} / ${Math.SQRT2}) / 2) - 3px);
          top: calc(calc(${itemHeight} / ${Math.SQRT2}) / 2 - 10px);
          border-right: 1px solid #000000;
          border-top: 1px solid #000000;
          background-color: ${Colors.sbWhite};
          transform: rotate(45deg);
        }
      `}</style>
    </li>
  );
};
